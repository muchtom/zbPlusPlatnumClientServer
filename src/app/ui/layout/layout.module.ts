import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContainerComponent } from './pages/container/container.component';
import { NbLayoutModule, NbSidebarModule, NbInputModule, NbCardModule, NbMenuModule, NbButtonModule, NbActionsModule, NbContextMenuModule, NbIconModule, NbSelectModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from './pages/top-nav/top-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuantityComponent } from './pages/dashboard/quantity/quantity.component';


@NgModule({
  declarations: [
    ContainerComponent,
    TopNavComponent,
    QuantityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    LayoutRoutingModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbIconModule,
    NbSelectModule,
    NbTabsetModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
