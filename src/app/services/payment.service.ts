import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { functionsEndpoint } from '../app.config';

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
      isProd
    }).toPromise()
  }

}
