import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetMemberDetailComponent } from '../components/set-member-detail/set-member-detail.component';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetMemberDetailComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
