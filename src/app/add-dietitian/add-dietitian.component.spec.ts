import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDietitianComponent } from './add-dietitian.component';

describe('AddDietitianComponent', () => {
  let component: AddDietitianComponent;
  let fixture: ComponentFixture<AddDietitianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDietitianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDietitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
