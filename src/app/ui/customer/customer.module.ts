import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SetCustomerActivityComponent } from './componets/set-customer-activity/set-customer-activity.component';
import { CustomerDetailComponent } from './componets/customer-detail/customer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbDialogService, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CustomerPaymentComponent } from './componets/customer-payment/customer-payment.component';
import { SetCustomerPaymentComponent } from './componets/set-customer-payment/set-customer-payment.component';


@NgModule({
  declarations: [
    CustomerDetailComponent,
    SetCustomerActivityComponent,
    CustomerPaymentComponent,
    SetCustomerPaymentComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbTabsetModule,
    NbAlertModule,
    NbInputModule,
    NbAlertModule,
    NbInputModule,
    FormsModule,
    NbFormFieldModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbCardModule,
    NbDatepickerModule,
  ],
  providers:[NbDialogService,AlertService]
})
export class CustomerModule { }
