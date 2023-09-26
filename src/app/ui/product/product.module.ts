import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDeliveryComponent } from './components/product-delivery/product-delivery.component';
import { SetProductDeliveryComponent } from './components/set-product-delivery/set-product-delivery.component';
import { ProductSaleComponent } from './components/product-sale/product-sale.component';
import { SetProductSaleComponent } from './components/set-product-sale/set-product-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbToggleModule, NbButtonModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDialogService, NbDatepickerModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AlertService } from 'src/app/shared/shared/services/alert.service';
import { ProductPricingComponent } from './components/product-pricing/product-pricing.component';
import { SetProductPricingComponent } from './components/set-product-pricing/set-product-pricing.component';
import { SetMemberComponent } from '../customer/componets/set-member/set-member.component';


@NgModule({
  declarations: [
    ProductDeliveryComponent,
    SetProductDeliveryComponent,
    ProductSaleComponent,
    SetProductSaleComponent,
    ProductPricingComponent,
    SetProductPricingComponent,

    SetMemberComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
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
export class ProductModule { }
