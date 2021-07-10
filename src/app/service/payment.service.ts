import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClientModule) { }

  getPayments(){
    const payments = [
      {pId: 1,code:'A', paymentAmt: 1234},
      {pId: 1,code:'B', paymentAmt: 1111},
      {pId: 1,code:'C', paymentAmt: 122234},
    ]

    return payments;
  }
}
