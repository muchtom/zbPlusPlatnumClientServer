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
          { path: '', redirectTo: '/system-parameters/home', pathMatch: 'full' },
          {
            path: 'product',
            loadChildren:()=> import('./ui/product/product.module').then(c=>c.ProductModule)
          },
          {
            path: 'reports',
            loadChildren:()=> import('./ui/reports/reports.module').then(c=>c.ReportsModule)
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
