import { TestBed } from '@angular/core/testing';

import { DbRequesterService } from './db-requester.service';

describe('DbRequesterService', () => {
  let service: DbRequesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbRequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
