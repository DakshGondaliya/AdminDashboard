import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipetypeComponent } from './recipetype.component';

describe('RecipetypeComponent', () => {
  let component: RecipetypeComponent;
  let fixture: ComponentFixture<RecipetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
