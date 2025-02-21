import { TestBed } from '@angular/core/testing';

import { MovieRequestServiceService } from './movie-request-service.service';

describe('MovieRequestServiceService', () => {
  let service: MovieRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
