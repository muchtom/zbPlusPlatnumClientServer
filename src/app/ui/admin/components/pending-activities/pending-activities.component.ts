import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CustomerDocumentReviewComponent } from 'src/app/ui/customer/componets/customer-document-review/customer-document-review.component';
import { SetCustomerPointsComponent } from '../set-customer-points/set-customer-points.component';

@Component({
  selector: 'app-pending-activities',
  templateUrl: './pending-activities.component.html',
  styleUrls: ['./pending-activities.component.scss']
})
export class PendingActivitiesComponent implements OnInit {

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
         {
          name:'viewRecord',
          title:
          '<i class="fa-regular fa-light fa-eye fa-2xs" style="color: #1660df;"></i>',
         }
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
        title: 'Name'
      },
      member: {
        title: 'Member',
        valuePrepareFunction: (member: { firstName: any; lastName: any; }) => `${member.firstName} ${member.lastName}`
      },
      prices: {
        title: 'Activity',
        valuePrepareFunction: (prices: { channelType: any; }) => prices.channelType  // Access channelType from prices
      },
      status: {
        title: 'Status'
      }
    },
  };

  allDeliveries:any;
  constructor( private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private http:HttpClient){}
  ngOnInit():void {
    this.http.get(`http://localhost:8005/pendingTransaction
    `).subscribe((response: any)=>{
      this.allDeliveries = response;
      console.log(this.allDeliveries);
      
      this.allDeliveries;
    })
  }

  // open(data:any){
  //   const dialogRef = this.dialogService.open(SetSubscriptionComponent,{
  //     context:{
  //       data:data,
  //     },
  //   });
  //   dialogRef.onClose.subscribe((response)=>{
  //     this.ngOnInit();
  //     this.allDeliveries;
  //   });
  // }

  onCustomAction(event:any){
    switch(event.action){
      case 'edit':
        this.addCustomerTransaction(event.data);
        break;
        case 'viewRecord':
          this.openCustomerDocument(event.data)
          break;
    }
  }
  addCustomerTransaction(data:any){
    console.log(data);
    
    const dialogRef = this.dialogService.open(SetCustomerPointsComponent,{
      context: {
        data:data
      }
    })
  }
  openCustomerDocument(data:any){
    console.log(data);
    
    const dialogRef = this.dialogService.open(CustomerDocumentReviewComponent,{
      context: {
        data:data
      }
    })
  }
  edit(data:any){
    const selectedItem = data
    console.log(selectedItem);
    // this.dialogServic.openDialog(selectedItem);
    this.allDeliveries;
    
  }
  showSuccess(){
    this.alertService.showSuccess("This is a success message");
  }

  showError(){
    this.alertService.showError("This is an error message");
  }

}
