import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemParametersRoutingModule } from './system-parameters-routing.module';
import { ContainerComponent } from './pages/container/container.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LineGraphComponent } from './pages/line-graph/line-graph.component';
import { ButcheryStatusComponent } from './pages/butchery-status/butchery-status.component';


@NgModule({
  declarations: [
    ContainerComponent,
    LineGraphComponent,
    ButcheryStatusComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbButtonModule,
    SystemParametersRoutingModule,
    CanvasJSAngularChartsModule,
    
  ]
})
export class SystemParametersModule { }
