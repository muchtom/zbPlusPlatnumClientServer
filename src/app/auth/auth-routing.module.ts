import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../shared/shared/gaurd';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      // {
      //   path: 'welcome', component:WelcomeComponent
      // },
      { path: 'login', component: WelcomeComponent },
     
      // { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'verify', component: EmailVerificationComponent },
      // { path: 'reset-password', component: ChangePasswordComponent },
    ]
  },
  {
      path: 'log',component:LoginComponent
  },
  {
    path: 'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AuthRoutingModule { }
