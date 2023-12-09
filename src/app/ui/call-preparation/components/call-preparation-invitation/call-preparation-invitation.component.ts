import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { KycService } from 'src/app/ui/kyc/services/kyc.service';
import { SetCallPreparationComponent } from '../set-call-preparation/set-call-preparation.component';

@Component({
  selector: 'app-call-preparation-invitation',
  templateUrl: './call-preparation-invitation.component.html',
  styleUrls: ['./call-preparation-invitation.component.scss']
})
export class CallPreparationInvitationComponent implements OnInit {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      delete: false,
      edit: false,
      custom:[
        
         {
          name:'viewRecord',
          title:
          '<i class="fa-regular fa-light fa-eye fa-2xs" style="color: #1660df;"></i>',
         },
         {
          name:'viewDocument',
          title:
          '<i class="far fa-file fa-sm" style="color:#28661c;height:20px"></i>',
         },
         {
          name:'edit',
          title:
          '<i class="fa-regular fa-pen-to-square fa-2xs" style="color:#28661c3"></i>',
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
        title: 'Customer Name',
      },
      idNumber: {
        title: 'Id Number'
      },
      income: {
        title: 'Income'
      },
    },
  };

  allDeliveries:any;
  constructor( private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: KycService, private http:HttpClient){}
  ngOnInit():void {
    this.http.get(`http://localhost:8005/zbPlusPlatnum/zviriko
    `).subscribe((response: any)=>{
      this.allDeliveries = response;
      console.log(this.allDeliveries);
      
      this.allDeliveries;
    })
  }

  open(data:any){
    const dialogRef = this.dialogService.open(SetCallPreparationComponent,{
      context:{
        data:data,
      },
    });
    dialogRef.onClose.subscribe((response)=>{
      this.ngOnInit();
      this.allDeliveries;
    });
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
