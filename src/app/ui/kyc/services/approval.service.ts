import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetApprovalComponent } from '../components/set-approval/set-approval.component';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetApprovalComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
