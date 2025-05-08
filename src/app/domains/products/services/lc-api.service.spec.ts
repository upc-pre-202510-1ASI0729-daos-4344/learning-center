import { TestBed } from '@angular/core/testing';

import { LcApiService } from './lc-api.service';

describe('LcApiService', () => {
  let service: LcApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
