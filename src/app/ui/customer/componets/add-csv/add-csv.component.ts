import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CsvService } from '../../service/csv.service';

@Component({
  selector: 'app-add-csv',
  templateUrl: './add-csv.component.html',
  styleUrls: ['./add-csv.component.scss']
})
export class AddCsvComponent implements OnInit {

   
 
  @Input() data:any;
  file: string = '';
  FileForm!: FormGroup;
  fileData!: any;

  @Output() add = new EventEmitter<string>();
  
  constructor(private dialogService: NbDialogService, protected dialogRef: NbDialogRef<AddCsvComponent>,private fb:FormBuilder,
    private service: ApiService,private alertService: AlertService, private document: CsvService) { 

      this.FileForm = fb.group({
        file: ['',Validators.required],
      });
    }

    get f(){
      return this.FileForm && this.FileForm.controls &&
      this.FileForm.controls["to"] as FormArray;
    }

    onFileSelected(event: any): void {
      const file = event.target.files[0];
       this.fileData = event
      // if (file) {
      //   const reader = new FileReader();
      //   reader.onload = () => {
      //     this.file = reader.result as string;
      //     // this.updateJson();
      //   };
      //   reader.readAsText(file);
      // }
    }

    // uploadFile(){
    //   this.document.uploadDocument(this.fileData.target.files[0]).subscribe((res:any) =>{
    //     console.log(res);
    //     this.ngOnInit();
    //     this.dismiss();
        
    //   })
    // }

    uploadFile() {
    
        this.document.uploadDocument(this.fileData.target.files[0]).subscribe((res: any) => {
          // this.alertService.showSuccess('Saved Succcessfuly');
          console.log(res);
          this.alertService.showSuccess('Saved Succcessfuly');
          this.dismiss();
          this.ngOnInit();
        });
    }

    private initForm(data:any){
      data= data ||{
        file: [],
        meeting:[],
       
      }
      return this.FileForm = new FormGroup({
        file: new FormControl(data.file,Validators.required),
      })
    }

    dismiss(){
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.data= {...this.data};
    console.log(this.data);
    
    this.initForm(this.data);
  }
  myForm = new FormGroup({
    names: new FormControl(''),
    email: new FormControl('')
  });
  onSubmit(){

  }
}
