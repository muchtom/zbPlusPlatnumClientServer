import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-confirmation',
  templateUrl: './set-confirmation.component.html',
  styleUrls: ['./set-confirmation.component.scss']
})
export class SetConfirmationComponent implements OnInit {

  
  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetConfirmationComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        zbAccount: ['',Validators.required],
        amount: ['',Validators.required],

      

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    submit(){


        // this.alertService.showSuccess('Saved Succcessfuly');
          this.ngOnInit();
          this.dismiss();
      // const dataToSend = { ...this.DepartmentForm.value };

      // const date =  this.DepartmentForm.value.date
      // const newProductDate = new Date(date)
      // newProductDate.setDate(newProductDate.getDate()+1);
      // dataToSend.date = newProductDate.toISOString().substring(0, 10);



      // var svc;
      // this.data.id ? svc= this.http.put(`http://localhost:8005/zbLoyalty/updatePricingSubscription/${this.data.id}`,
      // this.SalesForm.value) : svc=this.http.post(`http://localhost:8005/zbLoyalty/redeemPoints`,
      // this.SalesForm.value)
      // svc.subscribe({
      //   next:()=>{
      //     this.open(this.data);
      //     // this.alertService.showSuccess('Saved Succcessfuly');
      //     // this.ngOnInit();
      //     // this.dismiss();
      //   },
      //   error: (error) => {
          
      //     // Display a generic error message or handle the error accordingly
      //     this.alertService.showError('An error occurred. Please try again later.' , );
      //   }
      // })
    }

    open(data:any){
      const dialogRef = this.dialogService.open(SetConfirmationComponent,{
        context:{
          // data:data,
        },
      });
      dialogRef.onClose.subscribe((response)=>{
        this.alertService.showSuccess('Saved Succcessfuly');
          this.ngOnInit();
          this.dismiss();
      });
    }

    

    private initForm(data:any){
      data= data ||{
        subscription: [],
        amount:[],
        phoneNumber:[]
       
      }
      return this.SalesForm= new FormGroup({
        zbAccount: new FormControl(data.zbAccount,Validators.required),
        amount: new FormControl(data.amount,Validators.required),
        phoneNumber: new FormControl(data.phoneNumber,Validators.required),
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

}
