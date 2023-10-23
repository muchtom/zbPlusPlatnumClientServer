import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/shared/gaurd';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { LoginService } from 'src/app/shared/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      this.url =`http://localhost:8005/api/v1/auth/authenticate`
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    login(){
        this.http.post(`${this.url}`,this.form.value)
        .subscribe({
            next: (response: any) => {
              console.log(response);
              if (response.token) {
                 this.guard.service.saveToken(response.token);
                let returnUrl = `${this.route.snapshot.queryParams['returnUrl']}`;
                returnUrl = returnUrl !== 'undefined' ? returnUrl : ''
                location.href = returnUrl ? returnUrl : '/';
                return;
              }
               this.notification.showError("Failed");
            },
            error: (err: any) => {
              this.error=true
            },
          });
    }

    visitToRegisterPage(){
      console.log("muchemwa");
      
      this.router.navigate(['/register']);
      
    }

}
