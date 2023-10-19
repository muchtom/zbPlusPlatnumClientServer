import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { AddCsvComponent } from 'src/app/ui/customer/componets/add-csv/add-csv.component';
import { CustomerTransactionService } from 'src/app/ui/customer/service/customer-transaction.service';

@Component({
  selector: 'app-redeem-transactions',
  templateUrl: './redeem-transactions.component.html',
  styleUrls: ['./redeem-transactions.component.scss']
})
export class RedeemTransactionsComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      delete: false,
      edit: false,
      custom:[
        //  {
        //   name:'edit',
        //   title:
        //   '<i class="fa-regular fa-pen-to-square fa-2xs" style="color:#28661c3"></i>',
        //  },
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
      id: {
        title: 'zbId',
      },
      points: {
        title: 'Points'
      },
      date:{
        title: 'Date'
      },
      redeemChannel:{
        title: 'Channel'
      },
    },
  };

  allDeliveries:any;
  constructor( private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: CustomerTransactionService, private http:HttpClient){}
  ngOnInit():void {
    this.http.get(`http://localhost:8004/zbLoyalty/redeem/getAll
    `).subscribe((response: any)=>{
      this.allDeliveries = response;
      console.log(this.allDeliveries);
      
      this.allDeliveries;
    })
  }

  open(data:any){
    const dialogRef = this.dialogService.open(AddCsvComponent,{
      context:{
        data:data,
      },
    });
    dialogRef.onClose.subscribe((response)=>{
      this.ngOnInit();
      this.allDeliveries;
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
    this.allDeliveries;
    
  }
  showSuccess(){
    this.alertService.showSuccess("This is a success message");
  }

  showError(){
    this.alertService.showError("This is an error message");
  }

}
