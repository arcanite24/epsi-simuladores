import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaymentModel, Collections, PaymentStatus } from 'src/app/app.models';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { PaymentService } from 'src/app/services/payment.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'epsi-payment-page-alt',
  templateUrl: './payment-page-alt.component.html',
  styleUrls: ['./payment-page-alt.component.scss']
})
export class PaymentPageAltComponent implements OnInit {

  public payment_url: string;

  private slug: string = this.route.snapshot.paramMap.get('slug');
  public model$: Observable<PaymentModel> = this.afs.collection<PaymentModel>(Collections.PAYMENT_MODEL, ref => ref
    .where('slug', '==', this.slug))
    .valueChanges()
    .pipe(
      map(models => models[0]),
      tap(model => this.generatePayment(model))
    );

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private payment: PaymentService,
    private toastr: ToastrService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async generatePayment(model: PaymentModel) {

    // TODO: Change email for the actual logged user email
    const user = this.afAuth.auth.currentUser;
    const email = 'test_user_41665327@testuser.com';

    try {

      // Create payment request
      const request_id = this.afs.createId();
      await this.afs.doc(`${Collections.PAYMENT_REQUEST}/${request_id}`).set({
        id: request_id,
        user: user.uid,
        user_name: user.displayName,
        email,
        model,
        status: PaymentStatus.Pending,
        delivered: false
      });

      const paymentInfo = await this.payment.generatePaymentUrl(model.id, request_id, model.name, model.amount, email);
      this.payment_url = paymentInfo.init_point;
      console.log(paymentInfo);

    } catch (error) {
      console.log(error);
      this.toastr.error('Ocurrió un error al generar tu pago, por favor intenta más tarde o contacta con un administrador.');
    }

  }

}
