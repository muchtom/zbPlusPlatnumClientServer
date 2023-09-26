import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-admin-activity-detail',
  templateUrl: './set-admin-activity-detail.component.html',
  styleUrls: ['./set-admin-activity-detail.component.scss']
})
export class SetAdminActivityDetailComponent implements OnInit {


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
  selectedProductCode: any;
    
  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetAdminActivityDetailComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http: HttpClient) { 

      this.SalesForm = fb.group({
        zbAchiever: ['',Validators.required],
        name: ['',Validators.required],
        subscription: ['',Validators.required],
        points: ['',Validators.required]

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
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
          this.ropa = 'MyZbHealth'; 
           // Update ropa accordingly
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
    submit(){
      
      this.SalesForm.get('zbAchiever')?.setValue(this.ropa);
      var svc;
      this.data.id ? svc= this.http.put(`http://localhost:8004/zbLoyalty/updateActivity/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8004/zbLoyalty/addNewAdminActivity`,
      this.SalesForm.value)
      svc.subscribe({
        next:()=>{
       
          this.alertService.showSuccess('Saved Succcessfuly');
          this.ngOnInit();
          this.dismiss();
        }
      })
    }

    private initForm(data:any){
      data= data ||{
        zbAchiever: [],
        name:[],
        subscription:[],
        points:[]
       
      }
      return this.SalesForm= new FormGroup({
        zbAchiever: new FormControl(data.zbAchiever,Validators.required),
        name: new FormControl(data.name,Validators.required),
        points: new FormControl(data.points,Validators.required),
        subscription: new FormControl(data.subscription,Validators.required),
      })
    }

    dismiss(){
      this.dialogRef.close();
    }
    zbHealthMethod(){
      this.ropa = "MyZbHealth";
      
    }

    zbLivingMethod(){
      this.ropa = "MyZbLiving";
    }
    zbWealthMethod(){
      this.ropa = "MyZbWealth"
    }

  ngOnInit(): void {
    this.data= {...this.data};
    this.initForm(this.data);
    // const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    // this.SalesForm.get('zbAccount')?.setValue(user?.bankAccount); 
    this.zbHealthMethod();
    this.zbLivingMethod();
    this.zbWealthMethod();
    console.log(this.ropa); 
   
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
