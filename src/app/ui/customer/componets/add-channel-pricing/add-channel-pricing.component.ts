import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';

@Component({
  selector: 'app-add-channel-pricing',
  templateUrl: './add-channel-pricing.component.html',
  styleUrls: ['./add-channel-pricing.component.scss']
})
export class AddChannelPricingComponent implements OnInit {

  @Input() data:any;
  SalesForm!: FormGroup;
  selectedProductCode: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<AddChannelPricingComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private datePipe: DatePipe, private http:HttpClient) { 

      this.SalesForm = fb.group({
        channelType: ['',Validators.required],
        points: ['',Validators.required],

      

      });
    }

    get f(){
      return this.SalesForm && this.SalesForm.controls &&
      this.SalesForm.controls["to"] as FormArray;
    }


    submit(){
      var svc;
      this.data.id ? svc= this.http.put(`http://localhost:8004/updateChannel/${this.data.id}`,
      this.SalesForm.value) : svc=this.http.post(`http://localhost:8004/addNewChannelPrice`,
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
        channelType: [],
        points:[]
       
      }
      return this.SalesForm= new FormGroup({
        channelType: new FormControl(data.channelType,Validators.required),
        points: new FormControl(data.points,Validators.required),
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
}
