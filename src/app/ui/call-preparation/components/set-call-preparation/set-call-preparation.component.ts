import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { DocumentService } from 'src/app/ui/customer/service/document.service';

@Component({
  selector: 'app-set-call-preparation',
  templateUrl: './set-call-preparation.component.html',
  styleUrls: ['./set-call-preparation.component.scss']
})
export class SetCallPreparationComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;
  selectedArchievers: any;
  selectedActivity: any;
  zbActivities!: any[];
  postResponse: any;
  successResponse!: string;
  image: any;
  fileData!: any;
  selectedFileName: string = '';
    
  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService,private document: DocumentService, protected dialogRef: NbDialogRef<SetCallPreparationComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        name: ['',Validators.required],
        idNumber: ['',Validators.required],
        address: ['',Validators.required],
        spaces: ['',Validators.required],
        socialIntrests:['',Validators.required],
        businessIntrests:['',Validators.required],
        contactDetails:['',Validators.required],
        banking:['',Validators.required],
        fileName:['',Validators.required],
        insurance:['',Validators.required],
        investments:['',Validators.required],
        oneZbs:['',Validators.required],
        strategy:['',Validators.required],
        threeYearBanking:['',Validators.required],
        threeYearInsurance:['',Validators.required],
        threeYearOneZb:['',Validators.required],
        threeYearInvestments:['',Validators.required],
        background:['',Validators.required],
        recommendations:['',Validators.required],
        incomeType:['',Validators.required],
        assetsType:['',Validators.required],
        influenceStatus:['',Validators.required],
        influenceDigital:['',Validators.required],
        deligents:['',Validators.required],
        meetingDate:['',Validators.required],
        meetingTime:['',Validators.required],
        meetingVenue:['',Validators.required],
        meetingAgenda:['',Validators.required],
        customerIssues:['',Validators.required]
      });


    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    submit(){

      if (!this.SalesForm || !this.SalesForm.value || !this.SalesForm.value.meetingDate) {
        return;
      }
    
      const dataToSend = { ...this.SalesForm.value };
    
      const meetingDate = new Date(this.SalesForm.value.meetingDate);
      let meetingTime = null;
    
      // Validate and parse meeting start time
      if (this.SalesForm.value.meetingTime instanceof Date) {
        meetingTime = this.SalesForm.value.meetingStartTime;
      } else {
        const startTime = Date.parse(this.SalesForm.value.meetingTime);
        if (!isNaN(startTime)) {
          meetingTime = new Date(startTime);
        } else {
          console.error('Invalid meeting start time');
        }
      }
    
      // Format and assign values
      dataToSend.meetingDate = meetingDate.toISOString().substring(0, 10);
    
      if (meetingTime !== null) {
        dataToSend.meetingTime = meetingTime.toISOString().substring(11, 19);
      }

      var svc;
      this.data.id ? svc= this.http.put(`http://localhost:8005/zbPlusPlatnum/updateCustomerKycDetails/${this.data.id}`,dataToSend)
       : svc=this.http.post(`http://localhost:8005/zbPlusPlatnum/addNewCustomerDetailInformation`,dataToSend)
      svc.subscribe({
        next:()=>{
       
          this.alertService.showSuccess('Saved Succcessfuly');
          this.ngOnInit();
          console.log(this.fileData.target.files[0].name)
          this.dismiss();
        }
      })

      this.document.uploadDocument(this.fileData.target.files[0]).subscribe((res: any) => {
        console.log(res);
        this.ngOnInit();
        this.dismiss();
      });
      
    }

    onFileSelected(event: any): void {
      const file = event.target.files[0];
      this.selectedFileName = file ? file.name : '';
       this.fileData = event;
      
       if (!this.data.id) {
        this.SalesForm.get('fileName')?.setValue(this.selectedFileName);
      }
     
    }
  
    uploadFile() {
      const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
      const meetingControl = this.SalesForm.get('adminActivityId');
      console.log("baba")
      if (meetingControl && meetingControl.value) {
        const meetingId = meetingControl.value;
        this.document.uploadDocument(this.fileData.target.files[0]).subscribe((res: any) => {
          // this.alertService.showSuccess('Saved Succcessfuly');
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
        name: [],
        idNumber:[],
        address:[],
        spaces:[],
        socialIntrests:[],
        businessIntrests:[],
        contactDetails:[],
        banking:[],
        insurance:[],
        investments:[],
        oneZbs:[],
        strategy:[],
        threeYearBanking:[],
        threeYearInsurance:[],
        threeYearOneZb:[],
        threeYearInvestments:[],
        background:[],
        recommendations:[],
        incomeType:[],
        assetsType:[],
        influenceStatus:[],
        influenceDigital:[],
        deligents:[],
        fileName:[],
        meetingDate:[],
        meetingTime:[],
        meetingVenue:[],
        meetingAgenda:[],
        customerIssues:[],
       
      }
      return this.SalesForm= new FormGroup({
        name: new FormControl(data.name,Validators.required),
        idNumber: new FormControl(data.idNumber,Validators.required),
        address: new FormControl(data.address,Validators.required),
        spaces: new FormControl(data.spaces,Validators.required),
        socialIntrests: new FormControl(data.socialIntrests,Validators.required),
        businessIntrests: new FormControl(data.businessIntrests,Validators.required),
        contactDetails: new FormControl(data.contactDetails,Validators.required),
        banking: new FormControl(data.banking,Validators.required),
        insurance: new FormControl(data.insurance,Validators.required),
        investments: new FormControl(data.investments,Validators.required),
        oneZbs: new FormControl(data.oneZbs,Validators.required),
        strategy: new FormControl(data.strategy,Validators.required),
        threeYearBanking: new FormControl(data.threeYearBanking,Validators.required),
        threeYearInsurance: new FormControl(data.threeYearInsurance,Validators.required),
        threeYearOneZb: new FormControl(data.threeYearOneZb,Validators.required),
        threeYearInvestments: new FormControl(data.threeYearInvestments,Validators.required),
        background: new FormControl(data.background, Validators.required),
        recommendations: new FormControl(data.recommendations,Validators.required),
        incomeType: new FormControl(data.incomeType,Validators.required),
        assetsType: new FormControl(data.assetsType,Validators.required),
        influenceStatus: new FormControl(data.influenceStatus,Validators.required),
        influenceDigital: new FormControl(data.influenceDigital,Validators.required),
        deligents: new FormControl(data.deligents,Validators.required),
        fileName: new FormControl(data.fileName,Validators.required),
        meetingDate: new FormControl(data.meetingDate,Validators.required),
        meetingTime: new FormControl(data.meetingTime,Validators.required),
        meetingVenue: new FormControl(data.meetingVenue,Validators.required),
        meetingAgenda: new FormControl(data.meetingAgenda,Validators.required),
        customerIssues: new FormControl(data.customerIssues,Validators.required)
      })
    }

    dismiss(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.data= {...this.data};
    this.initForm(this.data);
    console.log(this.data)
  }
  myForm = new FormGroup({
    names: new FormControl(''),
    email: new FormControl('')
  });
  onSubmit(){

  }

  productCodes=[
    {
      name:'Free',
      value:'FREE'
    },
    {
      name:'Gold',
      value:'GOLD'
    },
    {
      name:'Platinum',
      value:'PLATINUM'
    },
    
  ]

}