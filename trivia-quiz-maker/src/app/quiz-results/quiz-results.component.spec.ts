import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultsComponent } from './quiz-results.component';

describe('TriviaResultsComponent', () => {
  let component: QuizResultsComponent;
  let fixture: ComponentFixture<QuizResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizResultsComponent]
    });
    fixture = TestBed.createComponent(QuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
