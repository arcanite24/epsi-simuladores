import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, PaymentRequest, PaymentStatus, User } from 'src/app/app.models';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';

@Component({
  selector: 'epsi-payment-request-detail-page',
  templateUrl: './payment-request-detail-page.component.html',
  styleUrls: ['./payment-request-detail-page.component.scss']
})
export class PaymentRequestDetailPageComponent implements OnInit, OnDestroy {

  private id: string = this.route.snapshot.paramMap.get('id');
  public request$: Observable<PaymentRequest> = this.afs.doc<PaymentRequest>(`${Collections.PAYMENT_REQUEST}/${this.id}`).valueChanges();

  private _request: Subscription;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this._request = this.request$.subscribe(r => {
      console.log('new status', r.status);
      this.onRequestChange(r);
    });
  }

  ngOnDestroy(): void {
    this._request.unsubscribe();
  }

  async onRequestChange(r: PaymentRequest) {

    console.log(r.status);

    // Check if roles are delivered
    if (r.status === PaymentStatus.Approved) {

      const role_payload = {};

      for (const role of r.model.unlocks) {
        role_payload[role] = true;
      }

      console.log('Updating role_payload', role_payload);
      console.log('PaymentRequest', r);

      const user = await this.afs.doc<User>(`${Collections.USER}/${r.user}`)
        .valueChanges()
        .pipe(
          take(1)
        ).toPromise();

      await this.afs.doc(`${Collections.USER}/${r.user}`).update(role_payload);
      await this.afs.doc(`${Collections.PAYMENT_REQUEST}/${r.id}`).update({delivered: true});
      if (r.coupon) { await this.afs.doc(`${Collections.COUPON}/${r.coupon}`).update({used: true, date: new Date().toISOString(), user}); }
      this.toastr.success('Tu pago ha sido verificado con éxito. Ya puedes acceder al contenido de la plataforma.');
      // this.router.navigate(['/home']);
      location.href = '/home';

    } else {

    }

  }

}
