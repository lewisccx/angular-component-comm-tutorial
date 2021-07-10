import { Component, OnInit } from '@angular/core';
import { User } from './../../model/User';
import { PaymentService } from './../../service/payment.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  record: string 
  profile: string
  user?: User
  payments: any[] = []
  constructor(private paymentService: PaymentService) {
    this.record =''
    this.profile=''
    
   }

  ngOnInit(): void {

    this.record ='456'
    this.profile =' lewis'
    this.payments = this.paymentService.getPayments()
  }
  receiveUserObj(user: User):void {
    this.user = user;
    console.log(user)
  }
}
