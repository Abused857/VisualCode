import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSonComponent } from './employee-son.component';
import { AppComponent } from '../app.component';
import { Employee } from '../employee.component';

describe('EmployeeSonComponent', () => {
  let component: EmployeeSonComponent;
  let fixture: ComponentFixture<EmployeeSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSonComponent, AppComponent, Employee]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
