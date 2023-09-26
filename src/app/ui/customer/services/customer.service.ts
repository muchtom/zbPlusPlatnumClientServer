import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetCustomerActivityComponent } from '../componets/set-customer-activity/set-customer-activity.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetCustomerActivityComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
