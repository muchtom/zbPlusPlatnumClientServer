import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetCustomerDetailComponent } from '../components/set-customer-detail/set-customer-detail.component';

@Injectable({
  providedIn: 'root'
})
export class KycService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetCustomerDetailComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
