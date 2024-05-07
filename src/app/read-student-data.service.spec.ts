import { TestBed } from '@angular/core/testing';

import { ReadStudentDataService } from './read-student-data.service';

describe('ReadStudentDataService', () => {
  let service: ReadStudentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadStudentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
