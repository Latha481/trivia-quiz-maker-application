import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TriviaSelectionComponent} from "./trivia-selection/trivia-selection.component";
import {QuizResultsComponent} from "./quiz-results/quiz-results.component";

const routes: Routes = [
  {path : '' , component : TriviaSelectionComponent},
  {path : 'quiz-results' , component : QuizResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

