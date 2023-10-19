import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AuthGuard } from 'src/app/shared/shared/gaurd';
import { ApiService } from 'src/app/shared/shared/services';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { LoginService } from 'src/app/shared/shared/services/login.service';

@Component({
  selector: 'app-reedem-points',
  templateUrl: './reedem-points.component.html',
  styleUrls: ['./reedem-points.component.scss']
})
export class ReedemPointsComponent implements OnInit {

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
        private alertService: AlertService,
        private cdr: ChangeDetectorRef


    ) { }



    

    ngOnInit() {

  

      this.url = 'http://localhost:8004/zbLoyalty/redeemPointsNow';
    
      this.form = this.formBuilder.group({
        id: ['', Validators.required],
        redeemChannel: ['', Validators.required],
        points: ['', Validators.required],
      });
    
      const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
      this.form.get('id')?.setValue(user?.id);
     
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
            console.error('Ma1');
          }
        );
    }
    
  
  visitToLoginPage(){
  console.log("bliss");
  
    this.router.navigate(['/log']);
      
  }
  onRedeemChannelChange() {
    if (this.selectedProductCode !== 'CashBack') {
      this.form.get('points')?.setValue(300);
      this.cdr.detectChanges(); // Manually trigger change detection
    }
  }
  productCodes=[
    {
      name:'QUPA Loan',
      value:'QUPA_Loan'
    },
    {
      name:'Cash Back',
      value:'CashBack'
    },
    {
      name: 'Cash Funeral Plan',
      value: 'Cash_Funeral_Plan'
    },
    {
      name: 'Bank Loan Repayment',
      value: 'Bank_Loan_Repayment'
    }
    
  ]
}
