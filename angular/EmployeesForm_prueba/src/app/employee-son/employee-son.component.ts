import { Component, Input, input } from '@angular/core';
import { Employee } from '../employee.component';
import { CommonModule } from '@angular/common';
import { CaracteristicasEmpleadoComponent } from '../caracteristicas-empleado/caracteristicas-empleado.component';
import { AppComponent } from '../app.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-son',
  standalone: true,
  imports: [CommonModule,CaracteristicasEmpleadoComponent, AppComponent, EmployeeSonComponent,RouterLink ],
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
