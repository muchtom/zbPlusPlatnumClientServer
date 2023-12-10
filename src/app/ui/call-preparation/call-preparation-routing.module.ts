import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallPreparationInvitationComponent } from './components/call-preparation-invitation/call-preparation-invitation.component';
import { PreparedCallsComponent } from './components/prepared-calls/prepared-calls.component';

const routes: Routes = [
  {
    path:'set-call',component:CallPreparationInvitationComponent
  },
  {
    path:'prepared-calls',component:PreparedCallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallPreparationRoutingModule { }
