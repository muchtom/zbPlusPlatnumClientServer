import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddChannelPricingComponent } from '../componets/add-channel-pricing/add-channel-pricing.component';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private dialogService: NbDialogService) { }

  openDialog(data:any){
    const dialogRef = this.dialogService.open(AddChannelPricingComponent,{
      context: {
        data: data,
      },
    });
    dialogRef.onClose.subscribe((response) =>{

    });
  }
}
