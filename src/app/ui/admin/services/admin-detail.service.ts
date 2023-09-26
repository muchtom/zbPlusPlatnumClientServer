import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetAdminActivityDetailComponent } from '../components/set-admin-activity-detail/set-admin-activity-detail.component';

@Injectable({
  providedIn: 'root'
})
export class AdminDetailService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetAdminActivityDetailComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
