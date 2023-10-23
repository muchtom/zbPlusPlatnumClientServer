import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-customer-payment',
  templateUrl: './set-customer-payment.component.html',
  styleUrls: ['./set-customer-payment.component.scss']
})
export class SetCustomerPaymentComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetCustomerPaymentComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        subscription: ['',Validators.required],
        zbAccount: ['',Validators.required],
      

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
      this.data.id ? svc= this.service.updateToUrl(`department/updateDepartment/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8005/zbLoyalty/addNewPayment`,
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
        zbAccount:[],
    
       
      }
      return this.SalesForm= new FormGroup({
        subscription: new FormControl(data.subscription,Validators.required),
        zbAccount: new FormControl(data.zbAccount,Validators.required),
        // date: new FormControl(data.date,Validators.required),

  
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
