import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesMainLayoutComponent } from './employees-main-layout.component';

describe('EmployeesMainLayoutComponent', () => {
  let component: EmployeesMainLayoutComponent;
  let fixture: ComponentFixture<EmployeesMainLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesMainLayoutComponent]
    });
    fixture = TestBed.createComponent(EmployeesMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
