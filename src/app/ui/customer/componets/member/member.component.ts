import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { MemberService } from '../../services/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

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
      firstName: {
        title: 'First Name',
      },
      lastName: {
        title: 'Last Name'
      },
      email:{
        title: 'Email'
      },
      role:{
          title: 'Role'
      }
    },
  };

  allPrices:any;
  constructor(private service:ApiService,private dialogService: NbDialogService,
    private alertService: AlertService, private dialogServic: MemberService){}
  ngOnInit():void {
    this.service.getFromUrl(`getAllMembers`).subscribe((response: any)=>{
      this.allPrices = response;
      console.log(this.allPrices);
      
      this.allPrices;
    })
  }

  open(data:any){
    // const dialogRef = this.dialogService.open(SetMemberComponent,{
    //   context:{
    //     data:data,
    //   },
    // });
    // dialogRef.onClose.subscribe((response)=>{
    //   this.ngOnInit();
    //   this.allPrices;
    // });
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
    // this.dialogServic.openDialog(selectedItem);
    this.allPrices;
    
  }
  showSuccess(){
    this.alertService.showSuccess("This is a success message");
  }

  showError(){
    this.alertService.showError("This is an error message");
  }

}
