import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentService } from './../../service/payment.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input()
  record: string
  
  
  @Input()
  profile: string 


  @Output()
  computedClaimAmt = new EventEmitter<any>();
  

  constructor(private paymentService: PaymentService) {
     this.record = ''
     this.profile = ''
   
   }

  ngOnInit(): void {

  }

  computeClaimAmout():void {
    const user =  {nric: 's92838d2h', staffId:'11112222' }
    this.computedClaimAmt.emit(user)
  }
}
