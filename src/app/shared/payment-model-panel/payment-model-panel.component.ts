import { Component, OnInit, Input } from '@angular/core';
import { PaymentModel, Collections, PaymentStatus, Coupon, PaymentPack, TuGuiaStats, TuGuiaStatsText, PaymentModelType, ExtraUnlock } from 'src/app/app.models';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { findIndex, flattenDeep } from 'lodash';

@Component({
  selector: 'epsi-payment-model-panel',
  templateUrl: './payment-model-panel.component.html',
  styleUrls: ['./payment-model-panel.component.scss']
})
export class PaymentModelPanelComponent implements OnInit {

  @Input() model: PaymentModel;
  @Input() disabled = false;

  public payment_url: string;
  public loading = false;

  public coupon: string;
  public pack: PaymentPack;

  public showPaypal = false;

  public stats: string[] = Object.values(TuGuiaStats);
  public statsText = TuGuiaStatsText;
  public selectedStat: string;

  public step = 1;

  public guias$: Observable<PaymentModel[]>;
  public apuntes$: Observable<PaymentModel[]>;
  public simuladores$: Observable<PaymentModel[]>;

  public guias: PaymentModel[];
  public apuntes: PaymentModel[];
  public simuladores: PaymentModel[];

  public guiaSelection: any = {};
  public apunteSelection: any = {};
  public simuladorSelection: any;

  public extraSelector = false;

  constructor(
    private sanitizer: DomSanitizer,
    private afs: AngularFirestore,
    private payment: PaymentService,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private auth: AuthService,
    private modal: NgxSmartModalService,
  ) { }

  ngOnInit() {

    if (this.model.type === PaymentModelType.Apunte) {
      this.apunteSelection[this.model.id] = true;
    }

    if (this.model.type === PaymentModelType.Guia) {
      this.guiaSelection[this.model.id] = true;
    }

    if (this.model.type === PaymentModelType.Simulador) {
      this.simuladorSelection = this.model.id;
    }

    this.guias$ = this.afs.collection<PaymentModel>(Collections.PAYMENT_MODEL, ref => ref
      .where('type', '==', PaymentModelType.Guia))
      .valueChanges()
      .pipe(tap(models => {
        this.guias = models;
        if (!this.model.canBuyIndividual) {
          models.forEach(m => this.guiaSelection[m.id] = true);
        }
      }));

    this.apuntes$ = this.afs.collection<PaymentModel>(Collections.PAYMENT_MODEL, ref => ref
      .where('type', '==', PaymentModelType.Apunte))
      .valueChanges()
      .pipe(tap(models => {
        this.apuntes = models;
        if (!this.model.canBuyIndividual) {
          models.forEach(m => this.apunteSelection[m.id] = true);
        }
      }));

    this.simuladores$ = this.afs.collection<PaymentModel>(Collections.PAYMENT_MODEL, ref => ref
      .where('type', '==', PaymentModelType.Simulador))
      .valueChanges()
      .pipe(tap(models => {
        this.simuladores = models;
        if (!this.model.canBuyIndividual) {
          models.forEach(m => this.simuladorSelection[m.id] = true);
        }
      }));

  }

  get modelBody() {
    if (!this.model) { return '...'; }
    return this.sanitizer.bypassSecurityTrustHtml(this.model.desc);
  }

  get subtotal(): number {
    return +this.getGuiasTotal(this.guias, this.guiaSelection) +
      +this.getApuntesTotal(this.apuntes, this.apunteSelection) +
      +this.getSimuladorTotal(this.simuladores, this.simuladorSelection);
  }

  get total(): number {

    let total = +this.getGuiasTotal(this.guias, this.guiaSelection) +
      +this.getApuntesTotal(this.apuntes, this.apunteSelection) +
      +this.getSimuladorTotal(this.simuladores, this.simuladorSelection);

    if (this.totalSelectedGuias >= 7) {
      total *= 0.9;
    }

    if (this.apuntes && this.totalSelectedApuntes === this.apuntes.length) {
      total *= 0.9;
    }

    return total;

  }

  get totalSelectedGuias(): number {
    return Object.values(this.guiaSelection).filter(guia => guia).length;
  }

  get totalSelectedApuntes(): number {
    return Object.values(this.apunteSelection).filter(guia => guia).length;
  }

  get haveDiscount(): boolean {
    if (this.totalSelectedGuias >= 7) { return true; }
    if (this.apuntes && this.totalSelectedApuntes === this.apuntes.length) { return true; }
    return false;
  }

  getGuiasTotal(guias: PaymentModel[] = [], selected: any = {}) {
    return +parseFloat(guias.filter(guia => selected[guia.id]).map(guia => +guia.amount).reduce((a, b) => a + b, 0).toString());
  }

  getApuntesTotal(apuntes: PaymentModel[] = [], selected: any = {}) {
    return +parseFloat(apuntes.filter(guia => selected[guia.id]).map(guia => +guia.amount).reduce((a, b) => a + b, 0).toString());
  }

  getSimuladorTotal(simuladores: PaymentModel[] = [], selected: string) {
    if (!selected) {
      return 0;
    }

    const index = findIndex(simuladores, sim => sim.id === selected);

    if (index > -1) {
      return +simuladores[index].amount;
    } else {
      return 0;
    }
  }

  loadGuiaAd(modal: string, guia: string) {
    this.extraSelector = false;
    this.guiaSelection[guia] = true;
    this.guiaSelection['27B61yUUWl1LclcAOX6s'] = true;
    this.guiaSelection['2CzOTpyqGdmloV5ErsVw'] = true;
    this.guiaSelection['JtNUDnZC4ZnH0vMkPjgv'] = true;
    this.guiaSelection['RllNakz2MyDYsFLCnCpJ'] = true;
    this.guiaSelection['cb2h4zllQozflSFvrZrU'] = true;
    this.guiaSelection['gYgbU8ga13W4bAqzUP5K'] = true;
    this.modal.getModal(modal).close();
  }

  loadApunteAd() {
    this.modal.getModal('apunteModal').close();
    const apuntes = this.apuntes.map(apunte => apunte.id);
    for (const apunte of apuntes) {
      this.apunteSelection[apunte] = true;
    }
  }

  async generatePayment(model: PaymentModel) {

    if (this.loading) { return this.toastr.error('No puedes generar otra solicitud de pago...'); }
    this.loading = true;

    const user = this.afAuth.auth.currentUser;
    const email = environment.production === true ? user.email : 'test_user_41665327@testuser.com';

    try {

      if (this.selectedStat) {
        await this.afs.collection(Collections.Stat).doc(this.selectedStat).update({ counter: firebase.firestore.FieldValue.increment(1) });
      }

      const request_payload = {
        coupon: null,
        coupon_value: null
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

      const selectedSim = this.simuladores.filter(s => s.id === this.simuladorSelection)[0];

      const extraUnlock = flattenDeep([
        ...this.guias.filter(guia => this.guiaSelection[guia.id] === true).map(g => g.unlocks),
        ...this.apuntes.filter(apunte => this.apunteSelection[apunte.id] === true).map(g => g.unlocks),
        ...selectedSim ? selectedSim.unlocks : [],
      ]);

      const extraUnlockPayload: ExtraUnlock = {
        id: this.afs.createId(),
        user: user.uid,
        delivered: false,
        unlocks: extraUnlock as string[],
      };

      await this.afs.collection(Collections.ExtraUnlock).doc(extraUnlockPayload.id).set({ ...extraUnlockPayload });

      console.log(extraUnlock, extraUnlockPayload);

      if (!environment.production) {
        return;
      }

      if (isFullCoupon) {

        // give extra unlock
        const extraPayload = {};

        for (const role of extraUnlock as string[]) {
          extraPayload[role] = true;
        }

        await this.afs.collection(Collections.USER).doc(user.uid).update({ ...extraPayload });

        console.log({ ...user });
        const _user = await this.afs.doc(`${Collections.USER}/${user.uid}`)
          .valueChanges()
          .pipe(
            take(1)
          ).toPromise();

        // Update coupon registry
        await this.afs.doc(`${Collections.COUPON}/${request_payload.coupon}`).update({
          date: new Date().toISOString(),
          user: { ..._user },
          used: true
        });

        // If pack is selected generate coupons
        // TODO: Actually implement this, soooo boring and probably none will gonna use EVER

        // Ignore Payment Gateway and redirect to Payment Request Detail
        return this.router.navigate(['/pago/status', request_id]);

      }

      amount = this.pack ? this.pack.price : this.total;
      if (request_payload.coupon) { amount -= amount * request_payload.coupon_value; }

      const paymentInfo = await this.payment
        .generatePaymentUrl(model.id, request_id, model.name, amount, email, environment.production === true);
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

  async loadPaypalButton(model: PaymentModel) {

    const request_payload = {
      coupon: null,
      coupon_value: null,
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

    const amount = request_payload.coupon_value ? model.amount - model.amount * request_payload.coupon_value : model.amount;

    this.payment.generatePaypalButton(`paypal-container-${model.id}`, amount, async payment => {
      console.log(model);
      if (payment.state == 'approved') {

        console.log('pago de paypal aprobado');
        const uid = this.auth.user.uid;
        const payload = {};

        for (const role of model.unlocks) {
          payload[role] = true;
        }

        await this.afs.collection(Collections.USER).doc(uid).update(payload);
        this.router.navigate(['/home']);

      } else {
        this.toastr.error('Algo salio mal con tu pago de PayPal');
      }
    });

    this.showPaypal = true;

  }

}
