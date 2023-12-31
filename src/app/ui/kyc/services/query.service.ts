import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetQueryComponent } from '../components/set-query/set-query.component';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetQueryComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
