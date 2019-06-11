import { TestBed } from '@angular/core/testing';

import { CustomerimportlistService } from './customerimportlist.service';

describe('CustomerimportlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerimportlistService = TestBed.get(CustomerimportlistService);
    expect(service).toBeTruthy();
  });
});
