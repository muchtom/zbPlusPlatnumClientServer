import { Injectable } from '@angular/core';
import { SetCallPreparationComponent } from '../components/set-call-preparation/set-call-preparation.component';
import { NbDialogService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class CallPreparationService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetCallPreparationComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}

