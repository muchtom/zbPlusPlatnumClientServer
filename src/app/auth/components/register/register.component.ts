import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/shared/gaurd';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { LoginService } from 'src/app/shared/shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  url:any
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


    ) { }



    

    ngOnInit() {
      this.url =`http://localhost:8004/api/v1/auth/register`
        this.form = this.formBuilder.group({
            firstName: ['',Validators.required],
            lastName: ['',Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            bankAccount: ['', Validators.required],
            idNumber: ['', Validators.required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    
    register() {
      this.http.post(`${this.url}`, this.form.value)
      .subscribe({
          next: (response: any) => {
              console.log(response);
              if (response.token) {
                  this.guard.service.saveToken(response.token);
                  // let returnUrl = `${this.route.snapshot.queryParams['returnUrl']}`;
                  // returnUrl = returnUrl !== 'undefined' ? returnUrl : '';
                  // location.href = returnUrl ? returnUrl : '/';
                  // Redirect to the login page
                  this.router.navigate(['/login']);
                  return;
              }
              this.notification.showError("Failed");
          },
          error: (err: any) => {
              this.error = true;
          },
      });
  }
  
  visitToLoginPage(){
  console.log("bliss");
  
    this.router.navigate(['/login']);
      
  }

}
