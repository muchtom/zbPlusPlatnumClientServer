import { Injectable } from '@angular/core';
import { SetSubscriptionComponent } from '../components/set-subscription/set-subscription.component';
import { NbDialogService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetSubscriptionComponent,{
      context: {
        // data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
