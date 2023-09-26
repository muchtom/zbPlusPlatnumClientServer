import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetProductSaleComponent } from '../components/set-product-sale/set-product-sale.component';

@Injectable({
  providedIn: 'root'
})
export class ProductSaleService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetProductSaleComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
