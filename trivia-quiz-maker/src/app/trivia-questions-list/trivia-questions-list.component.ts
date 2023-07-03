import {Component, HostListener, Input} from '@angular/core';
import {TriviaDataService} from "../trivia-data.service";
import {QuestionsList} from "../questions-list";
import {Question} from "../question";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trivia-questions-list',
  templateUrl: './trivia-questions-list.component.html',
  styleUrls: ['./trivia-questions-list.component.scss']
})
export class TriviaQuestionsListComponent {

  @Input() category : string;
  @Input() difficulty : string;
  questions : Question[];
  isAllQuestionsAnswered : boolean;
  showQuestionsList : boolean = true;
  constructor(private dataService : TriviaDataService,
              private router : Router) {

  }
  ngOnInit(): void {
    this.fetchQuestionsAndChoices();
  }

  fetchQuestionsAndChoices() {
    this.dataService.retrieveQuestions(this.category,this.difficulty).subscribe(
      (data:QuestionsList)=>{
        this.questions = data.results;
        this.mapAndRandomizeAnswers();
      });
  }

   mapAndRandomizeAnswers() {
     this.questions.forEach((question) => {
       //adding two new properties for tracking
       question.all_answers=[];
       question.isAnswered = false;
       question.all_answers.push(question.correct_answer);
       question.incorrect_answers.forEach((answer)=> question.all_answers.push(answer));
       question.all_answers = this.sortAnswersRandomly(question.all_answers);
     });
   }

  sortAnswersRandomly(array:string[]) {
    return array.concat().sort(() => 0.5 - Math.random());
  }

  setSelectedAnswer(questionEntry: Question, selectedAnswer: string){
    questionEntry.selected_answer=selectedAnswer;
    questionEntry.isAnswered = true;
    this.validateIfAllQuestionsAnswered();
  }

  validateIfAllQuestionsAnswered(){
    let validateAnswers : boolean[]=[];
    this.questions.forEach((question)=>{
      validateAnswers.push(question.isAnswered);
    });
    this.isAllQuestionsAnswered = validateAnswers.every(Boolean);
  }
  navigateToResults(){
    this.dataService.setAnsweredQuestions(this.questions);
    this.showQuestionsList = false;
    this.router.navigate(['quiz-results']).then(r => console.log("Navigated"));
  }
}
