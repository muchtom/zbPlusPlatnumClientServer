import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminActivityDetailComponent } from './components/admin-activity-detail/admin-activity-detail.component';
import { SetAdminActivityDetailComponent } from './components/set-admin-activity-detail/set-admin-activity-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbToggleModule, NbButtonModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbDialogService, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AlertService } from 'src/app/shared/shared/services/alert.service';


@NgModule({
  declarations: [
    AdminActivityDetailComponent,
    SetAdminActivityDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SmartTableModule,
    NbToggleModule,
    NbButtonModule,
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
    NgxPermissionsModule.forChild(),
    NbTabsetModule,
  ],
  providers:[NbDialogService,AlertService]
    
})
export class AdminModule { }
