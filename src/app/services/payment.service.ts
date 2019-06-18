import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { functionsEndpoint } from '../app.config';
import { environment } from 'src/environments/environment';
declare var paypal

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  generatePaymentUrl(model_id: string, request_id: string, title: string, amount: number, email: string, isProd: boolean = false) {
    return this.http.post<any>(`${functionsEndpoint}/pay/generate_payment`, {
      model_id,
      request_id,
      title,
      amount,
      email,
      isProd: true,
    }).toPromise();
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

}
