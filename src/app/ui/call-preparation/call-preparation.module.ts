import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallPreparationRoutingModule } from './call-preparation-routing.module';
import { SetCallPreparationComponent } from './components/set-call-preparation/set-call-preparation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbTabsetModule, NbAlertModule, NbInputModule, NbStepperModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbLayoutModule, NbDialogService, NbTimepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { CallPreparationInvitationComponent } from './components/call-preparation-invitation/call-preparation-invitation.component';
import { PreparedCallsComponent } from './components/prepared-calls/prepared-calls.component';


@NgModule({
  declarations: [
    SetCallPreparationComponent,
    CallPreparationInvitationComponent,
    PreparedCallsComponent
  ],
  imports: [
    CommonModule,
    CallPreparationRoutingModule,
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
    NbLayoutModule,
    NbTimepickerModule,
  ],
  providers:[NbDialogService,AlertService]
})
export class CallPreparationModule { }
