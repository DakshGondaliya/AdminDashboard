import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerimportlistComponent } from './customerimportlist.component';

describe('CustomerimportlistComponent', () => {
  let component: CustomerimportlistComponent;
  let fixture: ComponentFixture<CustomerimportlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerimportlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerimportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
