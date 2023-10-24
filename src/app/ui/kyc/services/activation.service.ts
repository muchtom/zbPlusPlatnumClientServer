import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetActivationComponent } from '../components/set-activation/set-activation.component';

@Injectable({
  providedIn: 'root'
})
export class ActivationService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetActivationComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
