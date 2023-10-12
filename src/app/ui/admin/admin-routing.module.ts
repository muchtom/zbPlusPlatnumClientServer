import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActivityDetailComponent } from './components/admin-activity-detail/admin-activity-detail.component';
import { PendingActivitiesComponent } from './components/pending-activities/pending-activities.component';

const routes: Routes = [
  {
    path: 'admin-activity',component:AdminActivityDetailComponent
  },
  {
    path: 'pending',component:PendingActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
