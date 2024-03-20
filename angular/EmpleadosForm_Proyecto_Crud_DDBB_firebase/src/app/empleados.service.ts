import { Injectable } from "@angular/core";
import { Employee } from "./employee.component";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";


@Injectable()
export class empleadosService{
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){}
  employee:Employee[]=[];
  setEmpleados(misEmpleados:Employee[])
  {
    this.employee = misEmpleados;
  }
  /*
    employee:Employee[]=[

        new Employee("Germán", "Martínez", "Presidente",  1500),
        new Employee("María", "Juncal", "Secretaria",  500),
        new Employee("Manuel", "Muñoz", "Trabajador",  3600),
        new Employee("Mario", "Miguel", "Trabajador",  1350),
        new Employee("Tirso", "Diego", "Gerente",  1600),
    
    
    
      ];
      */
      agregarEmpleadoServicio(empleado:Employee)
      {
        this.servicioVentanaEmergente.muestraMensaje("Nombre del empleado: " + empleado.name + " Apellido del empleado: " +  empleado.secondName + " Posición del empleado: " +  empleado.position + " Salario del empleado: " +  empleado.salary);
        this.employee.push(empleado);
        this.dataService.guardarEmpleado(this.employee);

      }
      encontrarEmpleado(indice:number):Employee
      {
        let empleado: Employee = this.employee[indice];
        return empleado;
      }
      actualizarEmpleado(indice:number, empleado: Employee)
      {
        let empleadoModificado = this.employee[indice];
        empleadoModificado.name = empleado.name;
        empleadoModificado.secondName = empleado.secondName;
        empleadoModificado.position = empleado.position;
        empleadoModificado.salary = empleado.salary;

        this.dataService.actualizarEmpleados(indice, empleado);
        

      }
      eliminarEmpleado(indice:number){
        this.employee.splice(indice, 1);
        this.dataService.eliminarEmpleados(indice);

        if(this.employee!=null)this.dataService.guardarEmpleado(this.employee);
        
      }

      obtenerEmpleados()
      {
        return this.dataService.cargarEmpleados();
      }
}