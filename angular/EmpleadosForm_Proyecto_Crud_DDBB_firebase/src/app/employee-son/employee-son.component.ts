import { Component, Input, input } from '@angular/core';
import { Employee } from '../employee.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-employee-son',
  templateUrl: './employee-son.component.html',
  styleUrl: './employee-son.component.css'
})
export class EmployeeSonComponent {
  @Input() empleadoDeLista: Employee;
  @Input() indice:number;
  constructor(private miServicio: ServicioEmpleadosService){}

  arrayCaracteristicas:any []=[];
  addCaracteristica(nuevaCaracteristica:string)
  {
    this.miServicio.muestraMensaje("La nueva característica es: " + nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
