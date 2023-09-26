import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetRedeemComponent } from '../components/set-redeem/set-redeem.component';

@Injectable({
  providedIn: 'root'
})
export class RedeemService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetRedeemComponent,{
      context: {
        // data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
