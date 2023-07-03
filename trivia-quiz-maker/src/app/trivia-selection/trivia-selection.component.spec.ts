import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaSelectionComponent } from './trivia-selection.component';

describe('TriviaSelectionComponent', () => {
  let component: TriviaSelectionComponent;
  let fixture: ComponentFixture<TriviaSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriviaSelectionComponent]
    });
    fixture = TestBed.createComponent(TriviaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
