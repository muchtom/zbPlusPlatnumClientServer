import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SetCustomerActivityComponent } from './componets/set-customer-activity/set-customer-activity.component';
import { CustomerDetailComponent } from './componets/customer-detail/customer-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbDialogService, NbTabsetModule, NbButtonGroupModule, NbIconModule, NbCheckboxModule, NbAutocompleteModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CustomerPaymentComponent } from './componets/customer-payment/customer-payment.component';
import { SetCustomerPaymentComponent } from './componets/set-customer-payment/set-customer-payment.component';
import { CustomerTransactionComponent } from './componets/customer-transaction/customer-transaction.component';
import { AddCsvComponent } from './componets/add-csv/add-csv.component';
import { ChannelPricingComponent } from './componets/channel-pricing/channel-pricing.component';
import { AddChannelPricingComponent } from './componets/add-channel-pricing/add-channel-pricing.component';
import { SetHealthActivityComponent } from './componets/set-health-activity/set-health-activity.component';
import { CustomerDocumentReviewComponent } from './componets/customer-document-review/customer-document-review.component';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { UserCustomerTransactionComponent } from './componets/user-customer-transaction/user-customer-transaction.component';


@NgModule({
  declarations: [
    CustomerDetailComponent,
    SetCustomerActivityComponent,
    CustomerPaymentComponent,
    SetCustomerPaymentComponent,
    CustomerTransactionComponent,
    AddCsvComponent,
    ChannelPricingComponent,
    AddChannelPricingComponent,
    SetHealthActivityComponent,
    CustomerDocumentReviewComponent,
    UserCustomerTransactionComponent
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
    NbButtonGroupModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbCardModule,
    NbAutocompleteModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NgxExtendedPdfViewerModule,
    NbAutocompleteModule,
    NbTabsetModule,
  ],
  providers:[NbDialogService,NgxExtendedPdfViewerService]
})
export class CustomerModule { }
