import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './ui/layout/pages/container/container.component';
import { AuthGuard } from './shared/shared/gaurd/auth-guard';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=> import('./auth/auth.module').then(c =>c.AuthModule)
  },
  {
    path: '', component: ContainerComponent,
    canActivate: [AuthGuard],
    children:
      [
        {
          path: 'system-parameters',
          loadChildren: () => import('./ui/system-parameters/system-parameters.module').then(c => c.SystemParametersModule),
        },
          // { path: '', redirectTo: '/system-parameters/home', pathMatch: 'full' },
        {
          path: 'customers', loadChildren:()=> import('./ui/customer/customer.module').then(c => c.CustomerModule)
        },
        {
          path: 'subscription', loadChildren:()=> import('./ui/subscription/subscription.module').then(c=> c.SubscriptionModule)
        },
        {
          path: 'admin', loadChildren:()=> import('./ui/admin/admin.module').then(c=> c.AdminModule)
        },
        {
          path: 'redeem', loadChildren:()=> import('./ui/redeem/redeem.module').then(c => c.RedeemModule)
        },
        {
          path: 'member', loadChildren:()=> import('./ui/member/member.module').then(c=> c.MemberModule)
        }
          // {
          //   path:'meetings',()
          //   loadChildren:()=> import('./ui/meetings/meetings.module').then(c=>c.MeetingsModule)
          // },
          // {
          //   path: 'departments',
          //   loadChildren:()=> import('./ui/departments/departments.module').then(c=>c.DepartmentsModule)
          // },
          // {
          //   path: 'goal',
          //   loadChildren:() =>import('./ui/goal/goal.module').then(c=>c.GoalModule)
          // },
          // {
          //   path: 'task',
          //   loadChildren:() =>import('./ui/task/task.module').then(c=>c.TaskModule)
          // },
          // {
          //   path: 'document',
          //   loadChildren:() =>import('./ui/documents/documents.module').then(c=> c.DocumentsModule)
          // },
          // {
          //   path: 'kanban',
          //   loadChildren:() =>import('./ui/kanban/kanban.module').then(c=> c.KanbanModule)
          // }

      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
