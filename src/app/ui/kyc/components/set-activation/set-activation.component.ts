import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-activation',
  templateUrl: './set-activation.component.html',
  styleUrls: ['./set-activation.component.scss']
})
export class SetActivationComponent implements OnInit {

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
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetActivationComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        banking: ['',Validators.required],
        insurance: ['',Validators.required],
        investiment: ['',Validators.required],  
        roadAssistance:['',Validators.required],
        security:['',Validators.required],
        carrierGuidance:['',Validators.required],
        airportLounge:['',Validators.required],
        activationStatus:['',Validators.required],
        email:['',Validators.required]

      });


    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    submit(){
      // this.SalesForm.get('fileName')?.setValue(this.selectedFileName);

      var svc;
      this.data.id ? svc= this.http.put(`http://localhost:8005/updateActionService/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8005/addNewServiceRequest`,
      this.SalesForm.value)
      svc.subscribe({
        next:()=>{
       
          this.alertService.showSuccess('Saved Succcessfuly');
          this.ngOnInit();
          this.dismiss();
        }
      })

   
      
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
  
 
     

    private initForm(data:any){
      data= data ||{
        banking: [],
        insurance:[],
        investment:[],
        roadAssistance:[],
        security:[],
        carrierGuidance:[],
        airportLounge:[],
        activationStatus:[],
        email:[],
       
       
      }
      return this.SalesForm= new FormGroup({
      
        banking: new FormControl(data.banking,Validators.required),
        insurance: new FormControl(data.insurance,Validators.required),
        investment: new FormControl(data.investment,Validators.required),
        roadAssistance: new FormControl(data.roadAssistance,Validators.required),
        security: new FormControl(data.security,Validators.required),
        carrierGuidance: new FormControl(data.carrierGuidance,Validators.required),
        airportLounge: new FormControl(data.airportLounge,Validators.required),
        activationStatus: new FormControl(data.activationStatus,Validators.required),
        email: new FormControl(data.email,Validators.required),
  
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
      name:'Activated',
      value:'ACTIVATED'
    },
    {
      name:'Deactivated',
      value:'DEACTIVATED'
    },
    
  ]
}
