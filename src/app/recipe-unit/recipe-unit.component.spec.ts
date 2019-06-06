import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeUnitComponent } from './recipe-unit.component';

describe('RecipeUnitComponent', () => {
  let component: RecipeUnitComponent;
  let fixture: ComponentFixture<RecipeUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
