import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitofmeasurementComponent } from './unitofmeasurement.component';

describe('UnitofmeasurementComponent', () => {
  let component: UnitofmeasurementComponent;
  let fixture: ComponentFixture<UnitofmeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitofmeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitofmeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
