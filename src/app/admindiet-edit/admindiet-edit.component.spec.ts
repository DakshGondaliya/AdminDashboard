import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindietEditComponent } from './admindiet-edit.component';

describe('AdmindietEditComponent', () => {
  let component: AdmindietEditComponent;
  let fixture: ComponentFixture<AdmindietEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindietEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindietEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
