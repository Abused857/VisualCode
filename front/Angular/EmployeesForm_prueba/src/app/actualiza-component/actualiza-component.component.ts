import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { empleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.component';

@Component({
  selector: 'app-actualiza-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit{
  fieldName:string;
  fieldSecondName:string;
  fieldPosition:string;
  fieldSalary:number;
  title:string="Put Form";
  indice:number;
  accion:number;
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadoService:empleadosService,
    private route:ActivatedRoute){
    this.employee = empleadoService.employee;
  }
  ngOnInit():void {
   this.indice=this.route.snapshot.params['id'];
   let empleado:Employee = this.empleadoService.encontrarEmpleado(this.indice);
   this.fieldName=empleado.name;
   this.fieldSecondName=empleado.secondName;
   this.fieldPosition=empleado.position;
   this.fieldSalary=empleado.salary;
   this.accion= parseInt(this.route.snapshot.queryParams['accion']);
  }
  employee:Employee[]=[];
  /*
  putEmployee()
  {
    let myemployee = new Employee (this.fieldName, this.fieldSecondName, this.fieldPosition, this.fieldSalary)
    this.empleadoService.actualizarEmpleado(this.indice, myemployee);
    this.router.navigate([""]);
   
  }
  deleteEmployee(){
    this.empleadoService.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }
  */

  putEmployee()
  {

    if (this.accion == 1) {
      let myemployee = new Employee (this.fieldName, this.fieldSecondName, this.fieldPosition, this.fieldSalary)
      this.empleadoService.actualizarEmpleado(this.indice, myemployee);
      this.router.navigate([""]);
      
    } else {
      this.empleadoService.eliminarEmpleado(this.indice);
      this.router.navigate([""]);
    }
   
  }
}
