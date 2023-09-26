import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

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
    
  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetCustomerActivityComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http: HttpClient) { 

      this.SalesForm = fb.group({
        zbAchiever: ['',Validators.required],
        name: ['',Validators.required],
        zbAccount: ['',Validators.required],
        points: ['',Validators.required]

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }
    // getActivitiesInArchiever(){
    //   this.http.get(`http://localhost:8004/zbLoyalty/getActivitiesUnderSpecificZbAchiever/${zbAchiever}`)
    // }

    onZbAchieverSelected() {
      const zbAchiever = this.selectedArchievers;
      console.log(zbAchiever);
      
      this.ropa = "MyZbHealth";
      
      this.http.get(`http://localhost:8004/zbLoyalty/getActivitiesUnderSpecificZbAchiever/MyZbHealth`)
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
    
    this.http.get(`http://localhost:8004/zbLoyalty/getActivitiesUnderSpecificZbAchiever/MyZbLiving`)
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
    
    this.http.get(`http://localhost:8004/zbLoyalty/getActivitiesUnderSpecificZbAchiever/MyZbWealth`)
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
    submit(){
      
      this.SalesForm.get('zbAchiever')?.setValue(this.ropa);

      var svc;
      this.data.id ? svc= this.service.updateToUrl(`department/updateDepartment/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8004/zbLoyalty/addNewCustomerActivity`,
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
        zbAccount:[],
        points:[]
       
      }
      return this.SalesForm= new FormGroup({
        zbAchiever: new FormControl(data.zbAchiever,Validators.required),
        name: new FormControl(data.name,Validators.required),
        zbAccount: new FormControl(data.zbAccount,Validators.required),
      })
    }

    dismiss(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.data= {...this.data};
    this.initForm(this.data);
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    this.SalesForm.get('zbAccount')?.setValue(user?.bankAccount); 
    this.onZbAchieverSelected();
    console.log(this.ropa); 
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
