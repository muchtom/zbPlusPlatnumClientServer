import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedeemDetailComponent } from './components/redeem-detail/redeem-detail.component';

const routes: Routes = [
  {
    path: 'redeem-detail',component:RedeemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemRoutingModule { }
