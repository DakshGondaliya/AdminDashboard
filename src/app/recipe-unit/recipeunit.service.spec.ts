import { TestBed } from '@angular/core/testing';

import { RecipeunitService } from './recipeunit.service';

describe('RecipeunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeunitService = TestBed.get(RecipeunitService);
    expect(service).toBeTruthy();
  });
});
