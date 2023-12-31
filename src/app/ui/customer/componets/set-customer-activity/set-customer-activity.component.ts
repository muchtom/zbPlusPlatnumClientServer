import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { DocumentService } from '../../service/document.service';

@Component({
  selector: 'app-set-customer-activity',
  templateUrl: './set-customer-activity.component.html',
  styleUrls: ['./set-customer-activity.component.scss']
})
export class SetCustomerActivityComponent implements OnInit {


  @Input() data:any;
  SalesForm!: FormGroup;
  selectedArchievers: any;
  selectedActivity: any;
  livingSelectedActivity: any;
  wealthSelectedActivity: any;
  wealthActivities!: any[];
  zbActivities!: any[];
  LivingActivities!:any[];
  ropa !:any;
   img!:any;
  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;
  fileData!: any;
    
  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetCustomerActivityComponent>,private fb:FormBuilder,
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

    onZbAchieverSelected() {
      const zbAchiever = this.selectedArchievers;
      console.log(zbAchiever);
      
      this.ropa = "MyZbHealth";
      
      this.http.get(`http://localhost:8005/zbLoyalty/getActivitiesUnderSpecificZbAchiever/MyZbHealth`)
          .subscribe(
              (activities: any) => {
                  this.zbActivities = activities;
                  console.log(this.zbActivities);
              },
              (error) => {
                  console.error('Error fetching activities:', error);
              }
          );
  }

  zbLivingActivities(){
    const zbAchiever = this.selectedArchievers;
    console.log(zbAchiever);
    
    this.ropa = "MyZbLiving";
    
    this.http.get(`http://localhost:8005/zbLoyalty/getActivitiesUnderSpecificZbAchiever/MyZbLiving`)
        .subscribe(
            (activities: any) => {
                this.LivingActivities = activities;
                console.log(this.LivingActivities);
            },
            (error) => {
                console.error('Error fetching activities:', error);
            }
        );
  }

  zbWealthActivites(){
    const zbAchiever = this.selectedArchievers;
    console.log(zbAchiever);
    
    this.ropa = "MyZbWealth";
    
    this.http.get(`http://localhost:8005/zbLoyalty/getActivitiesUnderSpecificZbAchiever/MyZbWealth`)
        .subscribe(
            (activities: any) => {
                this.wealthActivities= activities;
                console.log(this.wealthActivities);
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

  onTabChange(event: any) {
    const tabIdentifier = event.tab.tabIdentifier;
  
    // Get the zbAchiever control
    const zbAchieverControl = this.SalesForm.get('zbAchiever');
  
    if (zbAchieverControl) {  // Check if zbAchieverControl is not null
      // Update the zbAchiever based on the tabIdentifier
      switch (tabIdentifier) {
        case 'MyZbHealth':
          zbAchieverControl.setValue('MyZbHealth');
          this.ropa = 'MyZbHealth';  // Update ropa accordingly
          break;
        case 'MyZbLiving':
          zbAchieverControl.setValue('MyZbLiving');
          this.ropa = 'MyZbLiving';  // Update ropa accordingly
          break;
        case 'MyZbWealth':
          zbAchieverControl.setValue('MyZbWealth');
          this.ropa = 'MyZbWealth';  // Update ropa accordingly
          break;
        default:
          break;
      }
    }
  }
  uploadFile() {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    const meetingControl = this.SalesForm.get('adminActivityId');
    console.log("baba")
    if (meetingControl && meetingControl.value) {
      const meetingId = meetingControl.value;
      this.document.uploadDocument(this.fileData.target.files[0]).subscribe((res: any) => {
        this.alertService.showSuccess('Saved Succcessfuly');
        console.log(res);
        this.ngOnInit();
        this.dismiss();
      });
    } else {
      // Handle the case when the meeting form control is not found or has no value
    }
  }
    // submit(){
      
    //    this.SalesForm.get('zbAchiever')?.setValue(this.ropa);
    //    this.SalesForm.get('imageName')?.setValue(this.uploadedImage?.name);

    //   var svc;
    //   this.data.id ? svc= this.service.updateToUrl(`department/updateDepartment/${this.data.id}`,
    //   this.SalesForm.value) : svc=this.http.post(`http://localhost:8005/zbLoyalty/addNewCustomerActivity`,
    //   this.SalesForm.value)
    //   svc.subscribe({
    //     next:()=>{
       
    //       this.alertService.showSuccess('Saved Succcessfuly');
    //       this.ngOnInit();
    //       this.dismiss();
    //     }
    //   })
    // }

   

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

    public onImageUpload(event:any) {
      this.uploadedImage = event.target.files[0];
    }

  ngOnInit(): void {
    this.data= {...this.data};
    this.initForm(this.data);
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    // this.SalesForm.get('zbAccount')?.setValue(user?.bankAccount); 
    this.SalesForm.get('id')?.setValue(user?.id);
    this.onZbAchieverSelected();
    this.zbWealthActivites();
    this.zbLivingActivities();
   
  }
  myForm = new FormGroup({
    names: new FormControl(''),
    email: new FormControl('')
  });
  onSubmit(){

  }

  zbAchieverOptions=[
    {
      name:'MyZb Health',
      value:'MyZbHealth'
    },
    {
      name:'MyZb Wealth',
      value:'MyZbWealth'
    },
    {
      name:'MyZb Living',
      value:'MyZbLiving'
    },
    
  ]

}
