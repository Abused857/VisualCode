import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';
import { EmployeeSonComponent } from '../employee-son/employee-son.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit{
  
  
  title = 'EmployeesForm';
  employee:Employee[]=[];


  constructor(private miServicio:ServicioEmpleadosService, private empleadoService:empleadosService){

    //this.employee = empleadoService.employee;
  }
  ngOnInit(): void {
   this.empleadoService.obtenerEmpleados().subscribe(misEmpleados=>
    {
      console.log(misEmpleados);
      this.employee= Object.values(misEmpleados);

      this.empleadoService.setEmpleados(this.employee);
     
  
    });
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
