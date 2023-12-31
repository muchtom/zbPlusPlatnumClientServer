import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-member-detail',
  templateUrl: './set-member-detail.component.html',
  styleUrls: ['./set-member-detail.component.scss']
})
export class SetMemberDetailComponent implements OnInit {

  @Input() data:any;
  PricingForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetMemberDetailComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService) { 

      this.PricingForm = fb.group({
        firstName: ['',Validators.required],
        email: ['',Validators.required],
        password: ['',Validators.required],
        phoneNumber:['',Validators.required],
        idNumber:['',Validators.required]
      });
    }

    get f(){
      return this.PricingForm && this.PricingForm.controls &&
      this.PricingForm.controls["to"] as FormArray;
    }
 

    submit(){

      // const dataToSend = { ...this.DepartmentForm.value };

      // const date =  this.DepartmentForm.value.date
      // const newProductDate = new Date(date)
      // newProductDate.setDate(newProductDate.getDate()+1);
      // dataToSend.date = newProductDate.toISOString().substring(0, 10);

      var svc;
      this.data.id ? svc= this.service.updateToUrl(`http://localhost:8005/zbLoyalty/updateMember/${this.data.email}`,this.PricingForm.value)
       : svc=this.service.postToUrl(`http://localhost:8005/api/v1/auth/register`,
       this.PricingForm.value)
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
        firstName: [],
        idNumber:[],
        email:[],
        phoneNumber:[],
        password:[],
      
      }
      return this.PricingForm = new FormGroup({
        firstName: new FormControl(data.firstName,Validators.required),
        phoneNumber: new FormControl(data.phoneNumber,Validators.required),
        email: new FormControl(data.email,Validators.required),
        idNumber: new FormControl(data.idNumber,Validators.required),
        password: new FormControl(data.password,Validators.required)
  
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
      name:'Admin',
      value:'ADMIN'
    },
    {
      name:'Customer',
      value:'CUSTOMER'
    }
  ]

}
