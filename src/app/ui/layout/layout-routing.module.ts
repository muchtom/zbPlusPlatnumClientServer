import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { QuantityComponent } from './pages/dashboard/quantity/quantity.component';

const routes: Routes = [
  {
    path: 'home', component: ContainerComponent
  },
  {
    path: 'quantity', component: QuantityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
