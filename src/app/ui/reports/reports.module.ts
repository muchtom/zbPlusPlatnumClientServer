import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { SalesComponent } from './components/sales/sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonGroupModule, NbIconModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbDatepickerModule, NbCheckboxModule, NbCardModule, NbAutocompleteModule, NbButtonModule, NbDialogModule, NbTabsetModule } from '@nebular/theme';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CommonModule,
    FormsModule,
    NbButtonGroupModule,
    NbIconModule,
    ReportsRoutingModule,
    NbInputModule,
    NbFormFieldModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbCardModule,
    NbAutocompleteModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NgxExtendedPdfViewerModule,
    NbAutocompleteModule,
    NbTabsetModule,
  ],
  providers:[NgxExtendedPdfViewerService]
})
export class ReportsModule { }
