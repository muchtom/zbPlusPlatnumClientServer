import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SetProductPricingComponent } from '../components/set-product-pricing/set-product-pricing.component';

@Injectable({
  providedIn: 'root'
})
export class ProductPricingService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(SetProductPricingComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
