import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AuthGuard } from 'src/app/shared/shared/gaurd';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { LoginService } from 'src/app/shared/shared/services/login.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  url:any
  selectedProductCode: any;
  form!: FormGroup;
  error: boolean =false

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private http: HttpClient,
        private router: Router,
        private guard: AuthGuard,
        private notification:AlertService,
        private loginService: LoginService,
        private alertService: AlertService


    ) { }



    

    ngOnInit() {
      this.url = 'http://localhost:8004/zbLoyalty/addNewQuestionnaire';
    
      this.form = this.formBuilder.group({
        zbId: ['', Validators.required],
        educationProgress: ['', Validators.required],
        childrenSchoolLevel: ['', Validators.required],
        weddingAnniversary: ['', Validators.required],
        familyBirthdays: ['', Validators.required],
      });
    
      const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
      this.form.get('zbId')?.setValue(user?.id);
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    register() {
      this.http.post(this.url, this.form.value)
        .subscribe(
          (response) => {
            // Handle the response if needed
            this.alertService.showSuccess("Success");
            
            console.log('Form submitted successfully', response);
          },
          (error) => {
            // Handle the error
            console.error('Error submitting form', error);
          }
        );
    }
    
  
  visitToLoginPage(){
  console.log("bliss");
  
    this.router.navigate(['/log']);
      
  }
  productCodes=[
    {
      name:'Male',
      value:'MALE'
    },
    {
      name:'Female',
      value:'FEMALE'
    },
    
  ]

}
