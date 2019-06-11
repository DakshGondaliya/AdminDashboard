import { TestBed } from '@angular/core/testing';

import { AdminlistService } from './adminlist.service';

describe('AdminlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminlistService = TestBed.get(AdminlistService);
    expect(service).toBeTruthy();
  });
});
