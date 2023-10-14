import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetCustomerActivityComponent } from '../componets/set-customer-activity/set-customer-activity.component';
import { SetHealthActivityComponent } from '../componets/set-health-activity/set-health-activity.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetHealthActivityComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
