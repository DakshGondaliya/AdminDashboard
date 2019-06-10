import { TestBed } from '@angular/core/testing';

import { AddingredientService } from './addingredient.service';

describe('AddingredientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddingredientService = TestBed.get(AddingredientService);
    expect(service).toBeTruthy();
  });
});
