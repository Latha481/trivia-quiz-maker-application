import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TriviaDataService } from './trivia-data.service';

describe('TriviaDataService', () => {
  let service: TriviaDataService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TriviaDataService]
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
