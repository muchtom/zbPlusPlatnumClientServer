import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { DocumentService } from 'src/app/ui/customer/service/document.service';

@Component({
  selector: 'app-set-customer-detail',
  templateUrl: './set-customer-detail.component.html',
  styleUrls: ['./set-customer-detail.component.scss']
})
export class SetCustomerDetailComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  FileForm!: FormGroup;
  selectedArchievers: any;
  selectedActivity: any;
  zbActivities!: any[];
  postResponse: any;
  successResponse!: string;
  image: any;
  fileData!: any;
  selectedFileName: string = '';
    
  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService,private document: DocumentService, protected dialogRef: NbDialogRef<SetCustomerDetailComponent>,private fb:FormBuilder,
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

        // assets:['',Validators.required],
        // income:['',Validators.required],
        // influence:['',Validators.required],
        recommendations:['',Validators.required],
        incomeType:['',Validators.required],
        assetsType:['',Validators.required],
        influenceStatus:['',Validators.required],
        influenceDigital:['',Validators.required],
        deligents:['',Validators.required],
      

      });


    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    submit(){
      // this.SalesForm.get('fileName')?.setValue(this.selectedFileName);

      var svc;
      this.data.id ? svc= this.http.put(`http://localhost:8005/zbPlusPlatnum/updateCustomerKycDetails/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8005/zbPlusPlatnum/addNewCustomerDetailInformation`,
      this.SalesForm.value)
      svc.subscribe({
        next:()=>{
       
          this.alertService.showSuccess('Saved Succcessfuly');
          this.ngOnInit();
          console.log(this.fileData.target.files[0].name)
          this.dismiss();
        }
      })

      this.document.uploadDocument(this.fileData.target.files[0]).subscribe((res: any) => {
        // this.alertService.showSuccess('Saved Succcessfuly');
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
        // Only set the fileName value when adding a new record
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
        // assets:[],
        // income:[],
        // influence:[],
        recommendations:[],
        incomeType:[],
        assetsType:[],
        influenceStatus:[],
        influenceDigital:[],
        deligents:[],
        fileName:[],
       
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
        
        // assets: new FormControl(data.assets,Validators.required),
        // income: new FormControl(data.income,Validators.required),
        // influence: new FormControl(data.influence,Validators.required),
        recommendations: new FormControl(data.recommendations,Validators.required),
        incomeType: new FormControl(data.incomeType,Validators.required),
        assetsType: new FormControl(data.assetsType,Validators.required),
        influenceStatus: new FormControl(data.influenceStatus,Validators.required),
        influenceDigital: new FormControl(data.influenceDigital,Validators.required),
        deligents: new FormControl(data.deligents,Validators.required),
        fileName: new FormControl(data.fileName,Validators.required),
        // date: new FormControl(data.date,Validators.required),

  
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
