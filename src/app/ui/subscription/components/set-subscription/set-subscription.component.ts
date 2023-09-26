import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-subscription',
  templateUrl: './set-subscription.component.html',
  styleUrls: ['./set-subscription.component.scss']
})
export class SetSubscriptionComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetSubscriptionComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        subscription: ['',Validators.required],
        amount: ['',Validators.required],

      

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    submit(){

      // const dataToSend = { ...this.DepartmentForm.value };

      // const date =  this.DepartmentForm.value.date
      // const newProductDate = new Date(date)
      // newProductDate.setDate(newProductDate.getDate()+1);
      // dataToSend.date = newProductDate.toISOString().substring(0, 10);



      var svc;
      this.data.id ? svc= this.http.put(`http://localhost:8004/zbLoyalty/updatePricingSubscription/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8004/zbLoyalty/addNewSubscriptionPricing`,
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
        subscription: [],
        amount:[]
       
      }
      return this.SalesForm= new FormGroup({
        subscription: new FormControl(data.subscription,Validators.required),
        amount: new FormControl(data.amount,Validators.required),
        // date: new FormControl(data.date,Validators.required),

  
      })
    }

    dismiss(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.data= {...this.data};
    this.initForm(this.data);
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
