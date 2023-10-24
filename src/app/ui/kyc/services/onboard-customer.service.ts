import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetCustomerOnboardComponent } from '../components/set-customer-onboard/set-customer-onboard.component';

@Injectable({
  providedIn: 'root'
})
export class OnboardCustomerService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetCustomerOnboardComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
