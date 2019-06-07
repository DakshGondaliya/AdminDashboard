import { TestBed } from '@angular/core/testing';

import { PlanlistService } from './planlist.service';

describe('PlanlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanlistService = TestBed.get(PlanlistService);
    expect(service).toBeTruthy();
  });
});
