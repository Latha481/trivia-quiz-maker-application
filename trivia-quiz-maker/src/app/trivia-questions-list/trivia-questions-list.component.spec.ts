import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuestionsListComponent } from './trivia-questions-list.component';

describe('TriviaQuestionsListComponent', () => {
  let component: TriviaQuestionsListComponent;
  let fixture: ComponentFixture<TriviaQuestionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriviaQuestionsListComponent]
    });
    fixture = TestBed.createComponent(TriviaQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
