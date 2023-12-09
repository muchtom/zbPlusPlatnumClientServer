import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallPreparationInvitationComponent } from './components/call-preparation-invitation/call-preparation-invitation.component';

const routes: Routes = [
  {
    path:'set-call',component:CallPreparationInvitationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallPreparationRoutingModule { }
