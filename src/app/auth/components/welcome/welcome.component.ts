import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/shared/gaurd';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { LoginService } from 'src/app/shared/shared/services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private guard: AuthGuard,
    private notification:AlertService,
    private loginService: LoginService,) { }

  ngOnInit(): void {
  }
  visitToRegisterPage(){
    this.router.navigate(['/register']);
    
  }
  visitToLoginPage(){
      this.router.navigate(['/log']);
        
    }

}
