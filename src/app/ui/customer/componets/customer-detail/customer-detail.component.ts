import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CustomerService } from '../../services/customer.service';
import { SetCustomerActivityComponent } from '../set-customer-activity/set-customer-activity.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      delete: false,
      edit: false,
      // custom:[
      //    {
      //     name:'edit',
      //     title:
      //     '<i class="fa-regular fa-pen-to-square fa-2xs" style="color:#28661c3"></i>',
      //    },
      //    {
      //     name:'viewRecord',
      //     title:
      //     '<i class="fa-regular fa-light fa-eye fa-2xs" style="color: #1660df;"></i>',
      //    }
      // ],
      position: 'right'
    },
    edit: {
      editButtonContent: '<small class="ion-ios-locked"></small>',
      saveButtonContent: '<i class="ion-ios-checkmark"></i>',
      cancelButtonContent: '<i class="ion-ios-close"></i>',
      confirmSave: true
    },
    columns: {
      zbAchiever: {
        title: 'ZB Achiever',
      },
      name: {
        title: 'Activity'
      },
      zbAccount:{
         title: 'Account Number'
      },
      points:{
        title: 'Points'
      }
    },
  };

  customerDetails:any;
   userDetails:any
  constructor(private http:HttpClient, private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: CustomerService){}
  ngOnInit():void {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    console.log(user.bankAccount);
    
    this.userDetails = user.sub
    this.http.get(`http://localhost:8004/zbLoyalty/getUserActivityInfo/${user.bankAccount}`).subscribe((response: any)=>{
      this.customerDetails = response;
      console.log(this.customerDetails);
      
      this.customerDetails;
    })
  }

  open(data:any){
    const dialogRef = this.dialogService.open(SetCustomerActivityComponent,{
      context:{
        data:data,
      },
    });
    dialogRef.onClose.subscribe((response)=>{
      this.ngOnInit();
      this.customerDetails;
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
    this.customerDetails;
    
  }
  showSuccess(){
    this.alertService.showSuccess("This is a success message");
  }

  showError(){
    this.alertService.showError("This is an error message");
  }


}