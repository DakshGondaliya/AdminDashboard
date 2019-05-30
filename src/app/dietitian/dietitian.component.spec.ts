import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietitianComponent } from './dietitian.component';

describe('DietitianComponent', () => {
  let component: DietitianComponent;
  let fixture: ComponentFixture<DietitianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietitianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietitianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
