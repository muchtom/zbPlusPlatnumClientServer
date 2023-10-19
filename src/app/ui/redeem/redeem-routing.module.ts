import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedeemDetailComponent } from './components/redeem-detail/redeem-detail.component';
import { QualifyServicesComponent } from './components/qualify-services/qualify-services.component';
import { ReedemPointsComponent } from './components/reedem-points/reedem-points.component';
import { RedeemTransactionsComponent } from './components/redeem-transactions/redeem-transactions.component';
import { CashbackTransactionComponent } from './components/cashback-transaction/cashback-transaction.component';
import { UserCustomerDataComponent } from './components/user-customer-data/user-customer-data.component';

const routes: Routes = [
  {
    path: 'redeem-detail',component:RedeemDetailComponent
  },
  {
    path: 'qualify',component:QualifyServicesComponent
  },
  {
    path : 'redeem-points',component:ReedemPointsComponent
  },
  {
    path: 'redeem-transactions',component:RedeemTransactionsComponent
  },
  {
    path: 'cashback',component:CashbackTransactionComponent
  },
  {
    path: 'user-info',component:UserCustomerDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemRoutingModule { }
