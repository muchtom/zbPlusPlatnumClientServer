import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionDetailsComponent } from './components/subscription-details/subscription-details.component';
import { SetSubscriptionComponent } from './components/set-subscription/set-subscription.component';
import { NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbDialogService, NbFormFieldModule, NbInputModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AlertService } from 'src/app/shared/shared/services/alert.service';


@NgModule({
  declarations: [
    SubscriptionDetailsComponent,
    SetSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
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
export class SubscriptionModule { }
