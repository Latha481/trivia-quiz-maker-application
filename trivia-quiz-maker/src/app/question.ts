export interface Question {
  correct_answer: string,
  question : string,
  incorrect_answers : Array<string>,
  all_answers : Array<string>,
  selected_answer : string,
  isAnswered : boolean
}
