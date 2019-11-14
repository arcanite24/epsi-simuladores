import { Component, OnInit, Input } from '@angular/core';
import { PaymentModel, PaymentPack, Coupon, Collections, PaymentStatus, Roles } from 'src/app/app.models';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { take, map } from 'rxjs/operators';
import { flattenDeep } from 'lodash';
import moment from 'moment';

@Component({
  selector: 'epsi-payment-model-alt',
  templateUrl: './payment-model-alt.component.html',
  styleUrls: ['./payment-model-alt.component.scss']
})
export class PaymentModelAltComponent implements OnInit {

  @Input() model: PaymentModel;
  @Input() disabled = false;

  public payment_url: string;
  public loading = false;

  public coupon: string;
  public pack: PaymentPack;

  public showPaypal = false;

  public mode = 'premium';

  public showTooltip = false;
  public tooltipTeam = false;

  public meses = 1;
  public team = 1;
  public materia = false;

  public paypalGenerated = false;

  public preciosLight = {
    1: 290,
    2: 370,
    3: 440,
  };

  public multipliers = {
    1: 1,
    2: 0.9,
    3: 0.85,
    4: 0.80,
    5: 0.70,
    6: 0.50,
  };

  public preciosPremium = {
    1: 1400,
    3: 2700,
    6: 3800,
    9: 4700,
    12: 5400,
  };

  public materias = {
    'all': false,
    'Medicina Interna': false,
    'Pediatria': false,
    'Gineco': false,
    'Cirugia': false,
    'Urgencias': false,
  };

  public materiaMultiplier = {
    'all': 1,
    'Medicina Interna': 0.6,
    'Pediatria': 0.25,
    'Gineco': 0.25,
    'Cirugia': 0.25,
    'Urgencias': 0.1,
  };

  public unlocks = {
    'Medicina Interna': [Roles.isMedicinaInterna2020],
    'Pediatria': [Roles.isPediatria2020],
    'Gineco': [Roles.isGineco2020],
    'Cirugia': [Roles.isCirugia2020],
    'Urgencias': [Roles.isUrgencias2020],
  };

  constructor(
    private sanitizer: DomSanitizer,
    private afs: AngularFirestore,
    private payment: PaymentService,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  get selectedMaterias(): string {

    let result = '';

    for (const [key, value] of Object.entries(this.materias)) {
      if (value) {
        result += `${key} / `;
      }
    }

    return result;

  }

  get modelBody() {
    if (!this.model) { return '...'; }
    return this.sanitizer.bypassSecurityTrustHtml(this.model.desc);
  }

  get precio(): number {

    if (this.mode === 'light') {
      return this.preciosLight[this.meses] * this.multipliers[this.team] * this.team;
    } else {

      if (!this.materia) {
        return this.preciosPremium[this.meses] *
          this.multipliers[this.team] *
          this.team;
      } else {

        let total =  0;

        for (const [materia, value] of Object.entries(this.materias)) {
          if (value) {
            total += this.preciosPremium[this.meses] *
              this.multipliers[this.team] *
              this.team *
              this.materiaMultiplier[materia];
          }
        }

        return total;

      }

    }

  }

  async generatePayment(model: PaymentModel) {

    if (this.loading) { return this.toastr.error('No puedes generar otra solicitud de pago...'); }
    this.loading = true;

    const user = this.afAuth.auth.currentUser;
    const email = environment.production === true ? user.email : 'test_user_41665327@testuser.com';

    let unlocks: string[] = [this.mode === 'premium' ? Roles.isPremium2020 as string : Roles.isLight2020 as string];

    if (this.mode === 'premium') {
      if (this.materia) {

        for (const [materia,  val] of Object.entries(this.materias)) {
          if (val) {
            unlocks.push(...this.unlocks[materia]);
          }
        }

      } else {
        unlocks = [
          ...unlocks as string[],
          ...flattenDeep(Object.values(this.unlocks)) as string[],
        ];
      }
    }

    console.log(unlocks);

    try {

      const request_payload = {
        coupon: null,
        coupon_value: null,
        unlocks,
        subscription: moment().add(this.meses, 'months').toISOString(),
      };

      let isFullCoupon = false;
      let amount = 0;

      // Coupon validation
      if (this.coupon && this.coupon.length > 5) {

        const discount = await this.afs.collection<Coupon>(Collections.COUPON, ref => ref.where('code', '==', this.coupon))
          .valueChanges()
          .pipe(
            take(1),
            map(coupons => coupons[0])
          ).toPromise();

        if (!discount) {
          this.loading = false;
          return this.toastr.error('El cupón no es válido...');
        }

        if (discount.used) {
          this.loading = false;
          return this.toastr.error('El cupón ya ha sido usado...');
        }

        request_payload.coupon = discount.id;
        request_payload.coupon_value = discount.value / 100;
        isFullCoupon = discount.value >= 100;

      }

      // Create payment request
      const request_id = this.afs.createId();
      await this.afs.doc(`${Collections.PAYMENT_REQUEST}/${request_id}`).set({
        ...request_payload,
        id: request_id,
        user: user.uid,
        user_name: user.displayName,
        email,
        model,
        status: isFullCoupon ? PaymentStatus.Approved : PaymentStatus.Pending,
        delivered: false,
        wasFullCoupon: isFullCoupon,
        pack: this.pack ? this.pack : null
      });

      if (isFullCoupon) {

        console.log({...user});
        const _user = await this.afs.doc(`${Collections.USER}/${user.uid}`)
          .valueChanges()
          .pipe(
            take(1)
          ).toPromise();

        // Update coupon registry
        await this.afs.doc(`${Collections.COUPON}/${request_payload.coupon}`).update({
          date: new Date().toISOString(),
          user: {..._user},
          used: true
        });

        // Unlock roles
        const rolePayload = {};

        for (const role of unlocks) {
          rolePayload[role] = true;
        }

        await this.afs.collection(Collections.USER).doc(user.uid).update(rolePayload);

        // Set user sub
        await this.setUserSubscription(request_payload.subscription, user.uid);

        // If pack is selected generate coupons
        // TODO: Actually implement this, soooo boring and probably none will gonna use EVER

        // Ignore Payment Gateway and redirect to Payment Request Detail
        return this.router.navigate(['/pago/status', request_id]);

      }

      amount = this.pack ? this.pack.price : this.precio;
      if (request_payload.coupon) { amount -= amount * request_payload.coupon_value; }

      const paymentInfo = await this.payment.generatePaymentUrl
        ('ZAMNADEMy_MODULAR_2020', request_id, 'Zamnademy Modular 2020', amount, email, environment.production === true);
      this.payment_url = paymentInfo.init_point;
      console.log(paymentInfo);
      window.location.href = this.payment_url;
      setTimeout(() => this.loading = false, 3000);

    } catch (error) {
      console.log(error);
      this.toastr.error('Ocurrió un error al generar tu pago, por favor intenta más tarde o contacta con un administrador.');
      this.loading = false;
    }

  }

  async loadPaypalButton() {

    if (this.paypalGenerated) {
      return;
    }

    const request_payload = {
      coupon: null,
      coupon_value: null,
      subscription: moment().add(this.meses, 'months').toISOString(),
    };

    let isFullCoupon = false;

    // Coupon validation
    if (this.coupon && this.coupon.length > 5) {

      const discount = await this.afs.collection<Coupon>(Collections.COUPON, ref => ref.where('code', '==', this.coupon))
        .valueChanges()
        .pipe(
          take(1),
          map(coupons => coupons[0])
        ).toPromise();

      if (!discount) {
        this.loading = false;
        return this.toastr.error('El cupón no es válido...');
      }

      if (discount.used) {
        this.loading = false;
        return this.toastr.error('El cupón ya ha sido usado...');
      }

      request_payload.coupon = discount.id;
      request_payload.coupon_value = discount.value / 100;
      isFullCoupon = discount.value >= 100;

    }

    if (isFullCoupon) {
      this.loading = false;
      return this.toastr.error('El cupón es del 100%, no uses PayPal para redimir el cupón.');
    }

    const amount = request_payload.coupon_value ? this.precio - this.precio * request_payload.coupon_value : this.precio;

    this.paypalGenerated = true;

    this.payment.generatePaypalButton(`paypal-container-modular`, amount, async payment => {

      if (payment.state === 'approved') {

        console.log('pago de paypal aprobado');
        const uid = this.auth.user.uid;

        let unlocks: string[] = [this.mode === 'premium' ? Roles.isPremium2020 as string : Roles.isLight2020 as string];

        if (this.mode === 'premium') {
          if (this.materia) {

            for (const [materia,  val] of Object.entries(this.materias)) {
              if (val) {
                unlocks.push(...this.unlocks[materia]);
              }
            }

          } else {
            unlocks = [
              ...unlocks as string[],
              ...flattenDeep(Object.values(this.unlocks)) as string[],
            ];
          }
        }

        console.log(unlocks);

        // Unlock roles
        const rolePayload = {};

        for (const role of unlocks) {
          rolePayload[role] = true;
        }

        await this.setUserSubscription(request_payload.subscription, uid);

        await this.afs.collection(Collections.USER).doc(uid).update(rolePayload);
        this.router.navigate(['/home']);

      } else {
        this.toastr.error('Algo salio mal con tu pago de PayPal');
      }
    });

    this.showPaypal = true;

  }

  async setUserSubscription(subscription: string, user: string) {
    return await this.afs.collection(Collections.USER).doc(user).update({ subscription });
  }

}
