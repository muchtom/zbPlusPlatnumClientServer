import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { map } from 'rxjs';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-product-sale',
  templateUrl: './set-product-sale.component.html',
  styleUrls: ['./set-product-sale.component.scss']
})
export class SetProductSaleComponent implements OnInit {

  
  @Input() data:any;
  SaleForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  allMembers: any;
  priceFromCode: any;
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetProductSaleComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe) { 

      this.SaleForm = fb.group({
        code: ['',Validators.required],
        price: ['',Validators.required,Validators.min(0)],
        quantity: ['',Validators.required,Validators.min(0)]
      

      });
    }

    get f(){
      return this.SaleForm && this.SaleForm.controls &&
      this.SaleForm.controls["to"] as FormArray;
    }
    getProductDelivery(){
      this.service.getFromUrl(`all`).subscribe(response =>{
        this.allMembers = response.data;
        console.log(this.allMembers);
        
      })
    }

    submit(){

      // const dataToSend = { ...this.DepartmentForm.value };

      // const date =  this.DepartmentForm.value.date
      // const newProductDate = new Date(date)
      // newProductDate.setDate(newProductDate.getDate()+1);
      // dataToSend.date = newProductDate.toISOString().substring(0, 10);



      var svc;
      this.data.id ? svc= this.service.updateToUrl(`updateProductSale/${this.data.id}`,
      this.SaleForm.value) : svc=this.service.postToUrl(`addProductSale`,
      this.SaleForm.value)
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
        amount:[],
       
      }
      return this.SaleForm = new FormGroup({
        code: new FormControl(data.code,Validators.required),
        price: new FormControl(data.price,Validators.required),
        quantity: new FormControl(data.quantity,Validators.required)

  
      })
    }

    dismiss(){
      this.dialogRef.close();
    }

    // calculatePrice(){
    //    const quantityOfProductControl = this.DepartmentForm.get('quantity');
    //    if(quantityOfProductControl && quantityOfProductControl !==null){
    //     const quantityOfProduct =  quantityOfProductControl.value;
    //     //  this.getAmountFromCode();
    //     // const price   = quantityOfProduct * this.priceFromCode;
    //     this.DepartmentForm.patchValue({
    //       price : price
    //     });
    //    }
    // }

    calculatePrice() {
      const quantityOfProductControl = this.SaleForm.get('quantity');
      if (quantityOfProductControl && quantityOfProductControl !== null) {
        const quantityOfProduct = quantityOfProductControl.value;
        this.getAmountFromCode().subscribe(() => {
          const price = quantityOfProduct * this.priceFromCode;
          this.SaleForm.patchValue({
            price: price,
          });
        });
      }
    }

    calculateQuantity(){
      const priceOfProductControl = this.SaleForm.get('price');
      if(priceOfProductControl && priceOfProductControl !==null){
        const priceOfProduct = priceOfProductControl.value;
        // const quantity = priceOfProduct / 1.80;
        this.getAmountFromCode().subscribe(() => {
          const quantity = priceOfProduct / this.priceFromCode;
          this.SaleForm.patchValue({
            quantity: quantity,
          });
        }); 
      }

    }

    getAmountFromCode() {
      const selectedProductCode = this.selectedProductCode;
      return this.service.getFromUrl(`getPrice/${selectedProductCode}`).pipe(
        // Assuming this.service.getFromUrl returns an Observable
        map((response: any) => {
          this.priceFromCode = response;
          console.log(this.priceFromCode);
        })
      );
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
