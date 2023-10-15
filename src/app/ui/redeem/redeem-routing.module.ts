import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedeemDetailComponent } from './components/redeem-detail/redeem-detail.component';
import { QualifyServicesComponent } from './components/qualify-services/qualify-services.component';

const routes: Routes = [
  {
    path: 'redeem-detail',component:RedeemDetailComponent
  },
  {
    path: 'qualify',component:QualifyServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemRoutingModule { }
