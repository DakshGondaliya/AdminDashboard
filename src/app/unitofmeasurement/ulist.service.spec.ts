import { TestBed } from '@angular/core/testing';

import { UlistService } from './ulist.service';

describe('UlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UlistService = TestBed.get(UlistService);
    expect(service).toBeTruthy();
  });
});
