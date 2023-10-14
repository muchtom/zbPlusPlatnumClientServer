import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { SetCustomerActivityComponent } from '../set-customer-activity/set-customer-activity.component';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DocumentService } from '../../service/document.service';

@Component({
  selector: 'app-set-health-activity',
  templateUrl: './set-health-activity.component.html',
  styleUrls: ['./set-health-activity.component.scss']
})
export class SetHealthActivityComponent implements OnInit {

  
  @Input() data:any;
  SalesForm!: FormGroup;
  selectedArchievers: any;
  selectedActivity: any;
  zbActivities!: any[];
  postResponse: any;
  successResponse!: string;
  image: any;
  fileData!: any;
    
  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetHealthActivityComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http: HttpClient, private document: DocumentService) { 

      this.SalesForm = fb.group({
        file: ['',Validators.required],
        memberId: ['',Validators.required],
        adminActivityId: ['',Validators.required],

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }

    channelActivities() {
    
      this.http.get(`http://localhost:8004/getAllChannelPrices`)
          .subscribe(
              (response: any) => {
                  this.zbActivities = response;
                  console.log(this.zbActivities);
              },
              (error) => {
                  console.error('Error fetching activities:', error);
              }
          );
  }


  onFileSelected(event: any): void {
    const file = event.target.files[0];
     this.fileData = event
  }

  uploadFile() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const meetingControl = this.SalesForm.get('adminActivityId');
    console.log("baba")
    if (meetingControl && meetingControl.value) {
      const meetingId = meetingControl.value;
      this.document.uploadDocument(this.fileData.target.files[0],user?.id, meetingId ).subscribe((res: any) => {
        this.alertService.showSuccess('Saved Succcessfuly');
        console.log(res);
        this.ngOnInit();
        this.dismiss();
      });
    } else {
      // Handle the case when the meeting form control is not found or has no value
    }
  }
   

    private initForm(data:any){
      data= data ||{
        zbAchiever: [],
        name:[],
        zbAccount:[],
        points:[],
        imageName: []
      }
      return this.SalesForm= new FormGroup({
        memberId: new FormControl(data.memberId,Validators.required),
        file: new FormControl(data.file,Validators.required),
        adminActivityId: new FormControl(data.adminActivityId,Validators.required),
      })
    }

    dismiss(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.data= {...this.data};
    this.initForm(this.data);
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    console.log(user?.id)
    // this.SalesForm.get('zbAccount')?.setValue(user?.bankAccount); 
    this.SalesForm.get('id')?.setValue(user?.id);
    this.channelActivities();
  
   
  }
  myForm = new FormGroup({
    names: new FormControl(''),
    email: new FormControl('')
  });
  onSubmit(){

  }

}
