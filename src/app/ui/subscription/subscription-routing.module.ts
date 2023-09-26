import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionDetailsComponent } from './components/subscription-details/subscription-details.component';

const routes: Routes = [
  {
    path: 'details',component:SubscriptionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
