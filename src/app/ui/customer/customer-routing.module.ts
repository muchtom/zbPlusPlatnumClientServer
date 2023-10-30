import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './componets/customer-detail/customer-detail.component';
import { CustomerPaymentComponent } from './componets/customer-payment/customer-payment.component';
import { MemberComponent } from './componets/member/member.component';
import { CustomerTransactionComponent } from './componets/customer-transaction/customer-transaction.component';
import { ChannelPricingComponent } from './componets/channel-pricing/channel-pricing.component';
import { UserCustomerTransactionComponent } from './componets/user-customer-transaction/user-customer-transaction.component';


const routes: Routes = [
  {
    path: 'customer-detail',component:CustomerDetailComponent
  },
  {
    path: 'customer-payment',component:CustomerPaymentComponent
  },
  {
    path: 'members',component:MemberComponent
  },
  {
    path: 'customer-transaction',component:CustomerTransactionComponent
  },
  {
    path: 'channel-pricing',component:ChannelPricingComponent
  },
  {
    path:'user-transaction',component:UserCustomerTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
