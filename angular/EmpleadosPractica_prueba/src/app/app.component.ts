import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
