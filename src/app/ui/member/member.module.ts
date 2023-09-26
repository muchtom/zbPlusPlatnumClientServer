import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { SetMemberDetailComponent } from './components/set-member-detail/set-member-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbToggleModule, NbButtonModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbDialogService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AlertService } from 'src/app/shared/shared/services/alert.service';


@NgModule({
  declarations: [
    MemberDetailComponent,
    SetMemberDetailComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
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
    NgxPermissionsModule.forChild()
  ],
  providers:[NbDialogService,AlertService]
})
export class MemberModule { }
