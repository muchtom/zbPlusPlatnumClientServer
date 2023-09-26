import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-product-pricing',
  templateUrl: './set-product-pricing.component.html',
  styleUrls: ['./set-product-pricing.component.scss']
})
export class SetProductPricingComponent implements OnInit {

  
  @Input() data:any;
  PricingForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetProductPricingComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService) { 

      this.PricingForm = fb.group({
        code: ['',Validators.required],
        price: ['',Validators.required]
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
      this.data.id ? svc= this.service.updateToUrl(`updatePrice/${this.data.id}`,this.PricingForm.value)
       : svc=this.service.postToUrl(`addNewProductPrice`,
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
        code: [],
        price:[],
       
      }
      return this.PricingForm = new FormGroup({
        code: new FormControl(data.code,Validators.required),
        price: new FormControl(data.price,Validators.required)
  
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
