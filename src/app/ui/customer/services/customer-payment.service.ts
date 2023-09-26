import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetCustomerPaymentComponent } from '../componets/set-customer-payment/set-customer-payment.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerPaymentService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetCustomerPaymentComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
