import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDeliveryComponent } from './components/product-delivery/product-delivery.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import { ProductPricingComponent } from './components/product-pricing/product-pricing.component';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {
    path: 'product-delivery',component:ProductDeliveryComponent
  },
  {
    path: 'product-sale', component:ProductSaleComponent
  },
  {
    path: 'product-pricing', component: ProductPricingComponent
  },
  {
    path: 'members', component:MemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
