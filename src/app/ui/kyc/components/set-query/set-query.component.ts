import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-set-query',
  templateUrl: './set-query.component.html',
  styleUrls: ['./set-query.component.scss']
})
export class SetQueryComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<SetQueryComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        queryName: ['',Validators.required],
        email: ['',Validators.required],
        idNumber:['',Validators.required],
        status:['',Validators.required],

      

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
      this.data.id ? svc= this.http.put(`http://localhost:8005/zbPlusPlatnum/updateQuery/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8005/zbPlusPlatnum/addNewQuery`,
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
        queryName: [],
        email:[],
        status:[],
        idNumber:[],
       
      }
      return this.SalesForm= new FormGroup({
        queryName: new FormControl(data.queryName,Validators.required),
        email: new FormControl(data.email,Validators.required),
        idNumber: new FormControl(data.idNumber,Validators.required),
        status: new FormControl(data.status,Validators.required),
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
      name:'Opened',
      value:'OPENED'
    },
    {
      name:'Closed',
      value:'CLOSED'
    },
  
    
  ]

}
