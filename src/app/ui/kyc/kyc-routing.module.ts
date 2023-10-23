import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';

const routes: Routes = [
  {
    path: 'customer-detail',component:CustomerDetailComponent
  },
  {
    path: 'customer-info',component:CustomerInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KycRoutingModule { }
