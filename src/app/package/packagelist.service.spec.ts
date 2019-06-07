import { TestBed } from '@angular/core/testing';

import { PackagelistService } from './packagelist.service';

describe('PackagelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackagelistService = TestBed.get(PackagelistService);
    expect(service).toBeTruthy();
  });
});
