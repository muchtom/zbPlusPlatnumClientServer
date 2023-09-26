import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './componets/customer-detail/customer-detail.component';
import { CustomerPaymentComponent } from './componets/customer-payment/customer-payment.component';
import { MemberComponent } from './componets/member/member.component';


const routes: Routes = [
  {
    path: 'customer-detail',component:CustomerDetailComponent
  },
  {
    path: 'customer-payment',component:CustomerPaymentComponent
  },
  {
    path: 'members',component:MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
