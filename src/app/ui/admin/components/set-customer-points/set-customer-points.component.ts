import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-customer-points',
  templateUrl: './set-customer-points.component.html',
  styleUrls: ['./set-customer-points.component.scss']
})
export class SetCustomerPointsComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetCustomerPointsComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        transaction_status: ['',Validators.required],
        zbId: ['',Validators.required],
        channel_type: ['',Validators.required],
      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    // submit(){

    //   this.http.post(`http://localhost:8005/zbLoyalty/addNewSubscriptionPricing`,
    //   this.SalesForm.value)
    //   .subscribe({
    //     next:()=>{
       
    //       this.alertService.showSuccess('Saved Succcessfuly');
    //       this.ngOnInit();
    //       this.dismiss();
    //     }
    //   })
    // }
    submit() {
      const memberId = this.data.member.id;
      const channelType = this.data.prices.channelType;
      const requestBody = {
        transaction_status: this.SalesForm.get('transaction_status')?.value,
        zbId: memberId,
        channel_type: channelType,
      };
    
      this.http.post(`http://localhost:8005/zbLoyalty/newCustomerTransaction`, requestBody)
        .subscribe({
          next: () => {
            this.alertService.showSuccess('Saved Successfully');
            this.ngOnInit();
            this.dismiss();
          }
        });
    }
    

    private initForm(data:any){
      data= data ||{
        transaction_status: [],
        zbId:[],
        channel_type:[]
       
      }
      return this.SalesForm= new FormGroup({
        transaction_status: new FormControl(data.transaction_status,Validators.required),
        zbId: new FormControl(data.zbId,Validators.required),
        channel_type: new FormControl(data.channel_type,Validators.required),
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
      name:'Failed',
      value:'FAILED'
    },
    {
      name:'Success',
      value:'SUCCESS'
    },
    
  ]
}
