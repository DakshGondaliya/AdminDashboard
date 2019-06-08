import { TestBed } from '@angular/core/testing';

import { UomService } from './uom.service';

describe('UomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UomService = TestBed.get(UomService);
    expect(service).toBeTruthy();
  });
});
