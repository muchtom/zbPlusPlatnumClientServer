import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-product-delivery',
  templateUrl: './set-product-delivery.component.html',
  styleUrls: ['./set-product-delivery.component.scss']
})
export class SetProductDeliveryComponent implements OnInit {

 
  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetProductDeliveryComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe) { 

      this.SalesForm = fb.group({
        code: ['',Validators.required],
        cost: ['',Validators.required],
        amount: ['',Validators.required],
      

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }
    getProductDelivery(){
      this.service.getFromUrl(`all`).subscribe(response =>{
      
        
      })
    }

    submit(){

      // const dataToSend = { ...this.DepartmentForm.value };

      // const date =  this.DepartmentForm.value.date
      // const newProductDate = new Date(date)
      // newProductDate.setDate(newProductDate.getDate()+1);
      // dataToSend.date = newProductDate.toISOString().substring(0, 10);



      var svc;
      this.data.id ? svc= this.service.updateToUrl(`department/updateDepartment/${this.data.id}`,
      this.SalesForm.value) : svc=this.service.postToUrl(`addNewProductDelivery`,
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
        code: [],
        cost:[],
        amount:[]
       
      }
      return this.SalesForm= new FormGroup({
        code: new FormControl(data.code,Validators.required),
        cost: new FormControl(data.cost,Validators.required),
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
    this.getProductDelivery();
  }
  myForm = new FormGroup({
    names: new FormControl(''),
    email: new FormControl('')
  });
  onSubmit(){

  }

  productCodes=[
    {
      name:'Beef Commercial',
      value:'B101'
    },
    {
      name:'Beef Economy',
      value:'B102'
    },
    {
      name: 'Ox Liver',
      value: 'B103'
    }, 
    {
      name:'Matumbu',
      value:'B104'
    },
    {
      name:'Maguru',
      value:'B105'
    },
    {
      name: 'Susu',
      value: 'B106'
    },
    {
      name:'Mapapu',
      value:'B107'
    },
    {
      name:'Cattle Heart',
      value:'B108'
    },
    {
      name: 'Cattle Head',
      value: 'B109'
    },
    {
      name: 'Mazondo',
      value: 'B110'
    },
    {
      name:'Beef Bones',
      value:'B111'
    },
    {
      name:'Saw Dust',
      value:'B112'
    },
    {
      name: 'Pork',
      value: 'P101'
    },
    {
      name: 'Trotters',
      value: 'P102'
    },
    {
      name:'Pig Head',
      value:'P103'
    },
    {
      name:'Chicken Bird',
      value:'C101'
    },
    {
      name: 'Chicken Cutlets',
      value: 'C102'
    },
    {
      name: 'Chicken Head',
      value: 'C103'
    },
    {
      name:'Chicken Neck',
      value:'C104'
    },
    {
      name:'Chicken Feet',
      value:'C105'
    },
    {
      name: 'Gizzards',
      value: 'C106'
    },
    {
      name: 'Chicken Hearts',
      value: 'C107'
    },
    {
      name:'Hanga', 
      value:'C108'
    },
    {
      name:'Goat Meat',
      value:'G101'
    },
    {
      name: 'Goat Offals',
      value: 'G102'
    },
    {
      name: 'Goat Mazondo',
      value: 'G103'
    },
    {
      name:'Goat Musoro',
      value:'G104'
    },
    {
      name:'Mince',
      value:'M101'
    },
    {
      name: 'Sausage',
      value: 'S101'
    },
    {
      name: 'Cap',
      value: 'Cap1'
    },
    {
      name:'T-shirt',
      value:'Tshirt1'
    },
    {
      name:'PEPSI',
      value:'PEPSI1'
    }
  ]

}
