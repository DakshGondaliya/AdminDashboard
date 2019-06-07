import { TestBed } from '@angular/core/testing';

import { DietitianService } from './dietitian.service';

describe('DietitianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DietitianService = TestBed.get(DietitianService);
    expect(service).toBeTruthy();
  });
});
