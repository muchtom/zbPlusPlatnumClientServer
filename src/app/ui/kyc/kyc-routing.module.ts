import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerInvitationComponent } from './components/customer-invitation/customer-invitation.component';
import { OnboardCustomerComponent } from './components/onboard-customer/onboard-customer.component';
import { ServiceActivationComponent } from './components/service-activation/service-activation.component';
import { OnboardCustomerInfoComponent } from './components/onboard-customer-info/onboard-customer-info.component';
import { ServiceUserActivationComponent } from './components/service-user-activation/service-user-activation.component';
import { QueryInfoComponent } from './components/query-info/query-info.component';
import { QueryUserInfoComponent } from './components/query-user-info/query-user-info.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
  {
    path: 'customer-detail',component:CustomerDetailComponent
  },
  {
    path: 'customer-info',component:CustomerInfoComponent
  },
  {
    path: 'customer-invitation',component:CustomerInvitationComponent
  },
  {
    path:'onboard-customer',component:OnboardCustomerComponent
  },
  {
    path:'service-activation',component:ServiceActivationComponent
  },
  {
    path: 'onboard-customer-info',component:OnboardCustomerInfoComponent
  },
  {
    path: 'service-user-activation',component:ServiceUserActivationComponent
  },
  {
    path:'query-info',component:QueryInfoComponent
  },
  {
    path:'query-user-info',component:QueryUserInfoComponent
  },
  {
    path:'kyc-user',component:RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycRoutingModule { }
