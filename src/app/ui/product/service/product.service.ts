import { Injectable } from '@angular/core';
import { SetProductDeliveryComponent } from '../components/set-product-delivery/set-product-delivery.component';
import { NbDialogService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetProductDeliveryComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
