import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbTabsetModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbDialogService, NbStepperModule, NbLayoutModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { SetCustomerDetailComponent } from './components/set-customer-detail/set-customer-detail.component';
import { IndividualCustomerDetailComponent } from './components/individual-customer-detail/individual-customer-detail.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerInvitationComponent } from './components/customer-invitation/customer-invitation.component';
import { OnboardCustomerComponent } from './components/onboard-customer/onboard-customer.component';
import { SetCustomerOnboardComponent } from './components/set-customer-onboard/set-customer-onboard.component';
import { ServiceActivationComponent } from './components/service-activation/service-activation.component';
import { SetActivationComponent } from './components/set-activation/set-activation.component';
import { OnboardCustomerInfoComponent } from './components/onboard-customer-info/onboard-customer-info.component';
import { ServiceUserActivationComponent } from './components/service-user-activation/service-user-activation.component';
import { QueryInfoComponent } from './components/query-info/query-info.component';
import { SetQueryComponent } from './components/set-query/set-query.component';
import { QueryUserInfoComponent } from './components/query-user-info/query-user-info.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';


@NgModule({
  declarations: [
    CustomerDetailComponent,
    SetCustomerDetailComponent,
    IndividualCustomerDetailComponent,
    CustomerInfoComponent,
    CustomerInvitationComponent,
    OnboardCustomerComponent,
    SetCustomerOnboardComponent,
    ServiceActivationComponent,
    SetActivationComponent,
    OnboardCustomerInfoComponent,
    ServiceUserActivationComponent,
    QueryInfoComponent,
    SetQueryComponent,
    QueryUserInfoComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    KycRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbTabsetModule,
    NbAlertModule,
    NbInputModule,
    NbAlertModule,
    NbStepperModule,
    NbInputModule,
    FormsModule,
    NbFormFieldModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbCardModule,
    NbDatepickerModule,
    NbLayoutModule
    
  ],
  providers:[NbDialogService,AlertService]
})
 
export class KycModule { }
