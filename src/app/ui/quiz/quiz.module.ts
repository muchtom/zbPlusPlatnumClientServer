import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChangeBgDirective } from './directives/change-bg.directive';


@NgModule({
  declarations: [
    QuestionComponent,
    HeaderComponent,
    WelcomeComponent,
    ChangeBgDirective
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
