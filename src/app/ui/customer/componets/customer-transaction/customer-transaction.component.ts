import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CustomerTransactionService } from '../../service/customer-transaction.service';
import { HttpClient } from '@angular/common/http';
import { AddCsvComponent } from '../add-csv/add-csv.component';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.scss']
})
export class CustomerTransactionComponent implements OnInit {

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
      zbId: {
        title: 'zbId',
      },
      credit_account_number: {
        title: 'Account Number'
      },
      amount:{
        title: 'Amount'
      },
      created_date:{
        title: 'Created Date'
      },
      debit_customer_name:{
        title: 'Customer Name'
      },
      transaction_status:{
        title: 'Transaction Status'
      },
      channel_type:{
        title: 'Type'
      },
      points:{
        title: 'Points'
      }
    },
  };

  allDeliveries:any;
  constructor( private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: CustomerTransactionService, private http:HttpClient){}
  ngOnInit():void {
    this.http.get(`http://localhost:8005/zbLoyalty/allCustomers
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
