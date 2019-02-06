import { Component, OnInit, Input } from '@angular/core';
import { PaymentModel, Collections, PaymentStatus, Coupon } from 'src/app/app.models';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'epsi-payment-model-panel',
  templateUrl: './payment-model-panel.component.html',
  styleUrls: ['./payment-model-panel.component.scss']
})
export class PaymentModelPanelComponent implements OnInit {

  @Input() model: PaymentModel
  
  public payment_url: string
  public loading: boolean = false

  public coupon: string
  public pack: any

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private payment: PaymentService,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get modelBody() {
    if (!this.model) return '...'
    return this.sanitizer.bypassSecurityTrustHtml(this.model.desc)
  }
  
  async generatePayment(model: PaymentModel) {

    if (this.loading) return this.toastr.error('No puedes generar otra solicitud de pago...')
    this.loading = true

    const user = this.afAuth.auth.currentUser
    const email = environment.production === true ? user.email : 'test_user_41665327@testuser.com'
    
    try {
      
      let request_payload = {
        coupon: null,
        coupon_value: null
      }

      let isFullCoupon = false
      let amount = 0

      // Coupon validation
      if (this.coupon && this.coupon.length > 5) {

        const discount = await this.afs.collection<Coupon>(Collections.COUPON, ref => ref.where('code', '==', this.coupon))
          .valueChanges()
          .pipe(
            take(1),
            map(coupons => coupons[0])
          ).toPromise()

        if (!discount) {
          this.loading = false
          return this.toastr.error('El cupón no es válido...')
        }

        if (discount.used) {
          this.loading = false
          return this.toastr.error('El cupón ya ha sido usado...')
        }

        request_payload.coupon = discount.id
        request_payload.coupon_value = discount.value / 100
        isFullCoupon = discount.value >= 100

      }

      // Create payment request
      const request_id = this.afs.createId()
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
        pack: this.pack
      })

      if (isFullCoupon) {

        console.log({...user});
        const _user = await this.afs.doc(`${Collections.USER}/${user.uid}`)
          .valueChanges()
          .pipe(
            take(1)
          ).toPromise()
        
        // Update coupon registry
        await this.afs.doc(`${Collections.COUPON}/${request_payload.coupon}`).update({
          date: new Date().toISOString(),
          user: {..._user},
          used: true
        })

        // If pack is selected generate coupons
        // TODO: Actually implement this, soooo boring and probably none will gonna use EVER

        // Ignore Payment Gateway and redirect to Payment Request Detail
        return this.router.navigate(['/pago/status', request_id])

      }

      amount = this.pack ? this.pack.price : model.amount
      if (request_payload.coupon) amount -= amount * request_payload.coupon_value

      const paymentInfo = await this.payment.generatePaymentUrl(model.id, request_id, model.name, amount, email, environment.production === true)
      this.payment_url = paymentInfo.init_point
      console.log(paymentInfo)
      window.location.href = this.payment_url
      setTimeout(() => this.loading = false, 3000)

    } catch (error) {
      console.log(error)
      this.toastr.error('Ocurrió un error al generar tu pago, por favor intenta más tarde o contacta con un administrador.')
      this.loading = false
    }
    
  }

}
