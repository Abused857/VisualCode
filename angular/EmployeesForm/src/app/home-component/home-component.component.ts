import { Component } from '@angular/core';
import { Employee } from '../employee.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';
import { EmployeeSonComponent } from '../employee-son/employee-son.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [FormsModule,EmployeeSonComponent, CommonModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  title = 'EmployeesForm';
  employee:Employee[]=[];

  constructor(private miServicio:ServicioEmpleadosService, private empleadoService:empleadosService){

    this.employee = empleadoService.employee;
  }

  fieldName:string= "";
  fieldSecondName:string="";
  fieldPosition:string="";
  fieldSalary:number=0;

  addEmployee()
  {
    let myemployee = new Employee (this.fieldName, this.fieldSecondName, this.fieldPosition, this.fieldSalary)
    this.empleadoService.agregarEmpleadoServicio(myemployee);
   
  }
}
