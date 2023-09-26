import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { LineGraphComponent } from './pages/line-graph/line-graph.component';

const routes: Routes = [
  { path: 'home', component: ContainerComponent },
  {path: 'line-chart',component:LineGraphComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemParametersRoutingModule { }
