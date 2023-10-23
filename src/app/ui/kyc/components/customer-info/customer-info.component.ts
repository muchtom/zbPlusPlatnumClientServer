import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { KycService } from '../../services/kyc.service';
import { HttpClient } from '@angular/common/http';
import { SetCustomerDetailComponent } from '../set-customer-detail/set-customer-detail.component';
import { IndividualCustomerDetailComponent } from '../individual-customer-detail/individual-customer-detail.component';
import { CustomerDocumentReviewComponent } from 'src/app/ui/customer/componets/customer-document-review/customer-document-review.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthGuard } from 'src/app/shared/shared/gaurd';
import { LoginService } from 'src/app/shared/shared/services/login.service';
import { SubscriptionService } from 'src/app/ui/subscription/service/subscription.service';
import { SetSubscriptionComponent } from 'src/app/ui/subscription/components/set-subscription/set-subscription.component';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

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
      name: {
        title: 'Name',
      },
      address: {
        title: 'Address'
      },
      idNumber: {
        title: 'ID Number'
      },
    },
  };

  allDeliveries:any;
  constructor( private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: SubscriptionService, private http:HttpClient){}
  ngOnInit():void {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    this.http.get(`http://localhost:8005/customerInfoData/${user.idNumber}
    `).subscribe((response: any)=>{
      this.allDeliveries = response;
      console.log(this.allDeliveries);
      
      this.allDeliveries;
    })
  }

  open(data:any){
    const dialogRef = this.dialogService.open(SetSubscriptionComponent,{
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
