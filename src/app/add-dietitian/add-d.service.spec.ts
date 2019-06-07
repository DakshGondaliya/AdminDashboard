import { TestBed } from '@angular/core/testing';

import { AddDService } from './add-d.service';

describe('AddDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDService = TestBed.get(AddDService);
    expect(service).toBeTruthy();
  });
});
