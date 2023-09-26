import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActivityDetailComponent } from './components/admin-activity-detail/admin-activity-detail.component';

const routes: Routes = [
  {
    path: 'admin-activity',component:AdminActivityDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
