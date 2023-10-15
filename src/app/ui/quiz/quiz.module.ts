import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChangeBgDirective } from './directives/change-bg.directive';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbTabsetModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbSelectModule, NbCardModule, NbDatepickerModule, NbButtonGroupModule, NbIconModule, NbCheckboxModule, NbAutocompleteModule, NbDialogModule, NbLayoutModule, NbStepperModule } from '@nebular/theme';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


@NgModule({
  declarations: [
    QuestionComponent,
    HeaderComponent,
    WelcomeComponent,
    ChangeBgDirective,
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    NbButtonModule,
    NbTabsetModule,
    NbAlertModule,
    NbInputModule,
    NbAlertModule,
    NbInputModule,
    FormsModule,
    NbFormFieldModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbCardModule,
    NbDatepickerModule,
    NbButtonGroupModule,
    NbIconModule,
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
    NbLayoutModule,
    NbStepperModule,
   
  ]
})
export class QuizModule { }
