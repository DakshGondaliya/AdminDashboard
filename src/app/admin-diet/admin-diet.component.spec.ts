import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDietComponent } from './admin-diet.component';

describe('AdminDietComponent', () => {
  let component: AdminDietComponent;
  let fixture: ComponentFixture<AdminDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
