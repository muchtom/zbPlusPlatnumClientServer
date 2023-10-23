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


@NgModule({
  declarations: [
    CustomerDetailComponent,
    SetCustomerDetailComponent,
    IndividualCustomerDetailComponent,
    CustomerInfoComponent
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
