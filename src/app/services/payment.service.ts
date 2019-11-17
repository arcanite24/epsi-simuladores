import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { functionsEndpoint, modularUrl } from '../app.config';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
declare var paypal

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
  ) { }

  generatePaymentUrl(model_id: string, request_id: string, title: string, amount: number, email: string, isProd: boolean = false) {
    return this.http.post<any>(`${functionsEndpoint}/pay/generate_payment`, {
      model_id,
      request_id,
      title,
      amount,
      email,
      isProd
    }).toPromise()
  }

  generatePaypalButton(el: string, amount: number, cb: (payment) => any) {

    paypal.Button.render({
      env: environment.production ? 'production' : 'sandbox',
      commit: true,
      style: {
        color: 'gold',
        size: 'small'
      },
      client: {
        sandbox: environment.paypal,
        production: environment.paypal
      },
      payment: function(_, actions: any) {
        return actions.payment.create({
          payment: {
            transactions: [
              {
                amount: { total: amount, currency: 'MXN' }
              }
            ]
          }
        })
      },
      onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function(payment) {
          cb(payment)
        });
      },
    }, el)
  }

  checkIfLightRedirect() {
    if (!this.auth.isLight2020) {
      return this.router.navigate([modularUrl]);
    }
  }

}
