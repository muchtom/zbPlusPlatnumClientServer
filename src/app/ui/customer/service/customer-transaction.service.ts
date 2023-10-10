import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddCsvComponent } from '../componets/add-csv/add-csv.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerTransactionService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(AddCsvComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
