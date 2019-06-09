import { TestBed } from '@angular/core/testing';

import { RecipetypeService } from './recipetype.service';

describe('RecipetypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipetypeService = TestBed.get(RecipetypeService);
    expect(service).toBeTruthy();
  });
});
