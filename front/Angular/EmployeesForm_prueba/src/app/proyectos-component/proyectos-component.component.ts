import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proyectos-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proyectos-component.component.html',
  styleUrl: './proyectos-component.component.css'
})
export class ProyectosComponentComponent {
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadoService:empleadosService){
    this.employee = empleadoService.employee;
  }
title:string="Employee Form"
  volverHome()
  {

    this.router.navigate([""]);

  }
  employee:Employee[]=[];



    
  

  fieldName:string= "";
  fieldSecondName:string="";
  fieldPosition:string="";
  fieldSalary:number=0;

  addEmployee()
  {
    let myemployee = new Employee (this.fieldName, this.fieldSecondName, this.fieldPosition, this.fieldSalary)
    this.empleadoService.agregarEmpleadoServicio(myemployee);
    this.volverHome();
   
  }

}
