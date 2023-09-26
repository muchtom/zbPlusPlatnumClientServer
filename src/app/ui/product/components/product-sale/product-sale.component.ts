import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { ProductSaleService } from '../../service/product-sale.service';
import { SetProductSaleComponent } from '../set-product-sale/set-product-sale.component';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      delete: false,
      edit: false,
      custom:[
         {
          name:'edit',
          title:
          '<i class="fa-regular fa-pen-to-square fa-2xs" style="color:#28661c3"></i>',
         },
        //  {
        //   name:'viewRecord',
        //   title:
        //   '<i class="fa-regular fa-light fa-eye fa-2xs" style="color: #1660df;"></i>',
        //  }
      ],
      position: 'right'
    },
    edit: {
      editButtonContent: '<small class="ion-ios-locked"></small>',
      saveButtonContent: '<i class="ion-ios-checkmark"></i>',
      cancelButtonContent: '<i class="ion-ios-close"></i>',
      confirmSave: true
    },
    columns: {
      code: {
        title: 'Code',
      },
      price: {
        title: 'Price'
      },
      quantity:{
         title: 'Quantity'
      },
      date:{
        title: 'Date'
      }
    },
  };

  allSales:any;
  constructor(private http:HttpClient, private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: ProductSaleService){}
  ngOnInit():void {
    this.service.getFromUrl(`productSale/getAll`).subscribe((response: any)=>{
      this.allSales = response;
      console.log(this.allSales);
      
      this.allSales;
    })
  }

  open(data:any){
    const dialogRef = this.dialogService.open(SetProductSaleComponent,{
      context:{
        data:data,
      },
    });
    dialogRef.onClose.subscribe((response)=>{
      this.ngOnInit();
      this.allSales;
    });
  }

  onCustomAction(event:any){
    switch(event.action){
      case 'edit':
        this.edit(event.data);
        break;
    }
  }
  edit(data:any){
    const selectedItem = data
    console.log(selectedItem);
    this.dialogServic.openDialog(selectedItem);
    this.allSales;
    
  }
  showSuccess(){
    this.alertService.showSuccess("This is a success message");
  }

  showError(){
    this.alertService.showError("This is an error message");
  }

}
