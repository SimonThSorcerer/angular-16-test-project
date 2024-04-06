import { TestBed } from '@angular/core/testing';

import { BookDisplayServiceService } from './book-display.service.service';

describe('BookDisplayServiceService', () => {
  let service: BookDisplayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDisplayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
