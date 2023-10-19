import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeemRoutingModule } from './redeem-routing.module';
import { RedeemDetailComponent } from './components/redeem-detail/redeem-detail.component';
import { SetRedeemComponent } from './components/set-redeem/set-redeem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbTabsetModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbDialogService, NbButtonGroupModule, NbAutocompleteModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbLayoutModule, NbStepperModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { SetConfirmationComponent } from './components/set-confirmation/set-confirmation.component';
import { QualifyServicesComponent } from './components/qualify-services/qualify-services.component';
import { ReedemPointsComponent } from './components/reedem-points/reedem-points.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RedeemTransactionsComponent } from './components/redeem-transactions/redeem-transactions.component';
import { CashbackTransactionComponent } from './components/cashback-transaction/cashback-transaction.component';
import { UserCustomerDataComponent } from './components/user-customer-data/user-customer-data.component';


@NgModule({
  declarations: [
    RedeemDetailComponent,
    SetRedeemComponent,
    SetConfirmationComponent,
    QualifyServicesComponent,
    ReedemPointsComponent,
    RedeemTransactionsComponent,
    CashbackTransactionComponent,
    UserCustomerDataComponent
  ],
  imports: [
    CommonModule,
    RedeemRoutingModule,
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
    NbCheckboxModule,
    NbAutocompleteModule,
    NbDialogModule.forChild(),
    NgxExtendedPdfViewerModule,
    NbAutocompleteModule,
    NbLayoutModule,
    NbStepperModule,
  ],
  providers:[NbDialogService,AlertService]
})
export class RedeemModule { }
