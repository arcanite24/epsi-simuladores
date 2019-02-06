import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collections, PaymentRequest } from 'src/app/app.models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'epsi-payment-request-detail-page',
  templateUrl: './payment-request-detail-page.component.html',
  styleUrls: ['./payment-request-detail-page.component.scss']
})
export class PaymentRequestDetailPageComponent implements OnInit, OnDestroy {

  private id: string = this.route.snapshot.paramMap.get('id')
  public request$: Observable<PaymentRequest> = this.afs.doc<PaymentRequest>(`${Collections.PAYMENT_REQUEST}/${this.id}`).valueChanges()

  private _request: Subscription

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this._request = this.request$.subscribe(r => this.onRequestChange(r))
  }

  ngOnDestroy(): void {
    this._request.unsubscribe()
  }

  async onRequestChange(r: PaymentRequest) {
    
    // Check if roles are delivered
    if (!r.delivered) {

      for (const role of r.model.unlocks) {
        await this.afs.doc(`${Collections.USER}/${r.user}`).update({[role]: true})
      }

      await this.afs.doc(`${Collections.PAYMENT_REQUEST}/${r.id}`).update({delivered: true})
      this.toastr.success('Tu pago ha sido verificado con éxito. Ya puedes acceder al contenido de la plataforma.')
      this.router.navigate(['/home'])
      
    } else {
      //this.toastr.error('Tu pago ya ha sido validado correctamente. Si aún no puede accesar al contenido de la plataforma, contacta con un administrador.')
      //setTimeout(() => this.router.navigate(['/home']), 4000)
    }

  }

}
