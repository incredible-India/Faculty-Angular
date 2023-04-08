import { TestBed } from '@angular/core/testing';

import { DempAPIService } from './demp-api.service';

describe('DempAPIService', () => {
  let service: DempAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DempAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
