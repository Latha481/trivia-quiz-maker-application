import {Component, OnInit} from '@angular/core';
import {Question} from "../question";
import {TriviaDataService} from "../trivia-data.service";
import {AppConstants} from "../app.constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit{
  protected readonly AppConstants = AppConstants;
  answeredQuestions : Question[];
  score : number = 0;
  constructor(private dataService : TriviaDataService,
              private router : Router){
  }
  ngOnInit(): void {
    this.answeredQuestions = this.dataService.getAnsweredQuestions();
    if(this.answeredQuestions == undefined) {
      debugger;
      //in case route is directly activated
      this.navigateToSelection();
    }
    this.computeScores();
  }

  navigateToSelection(){
    this.dataService.setAnsweredQuestions([]);
    this.router.navigate(['']).then(r => console.log("Navigated to selection screen"));
  }
  setColorCoding(question: Question, choice : string ){
    if(choice == question.correct_answer){
      return 'correct-choice';
    }
    else{
      return (choice !=question.selected_answer)? 'other-choice' : 'wrong-choice';
    }
  }
  computeScores(){
  this.answeredQuestions.forEach((question) => {
  if(question.selected_answer == question.correct_answer){
    this.score++;
  }});
  }
}
