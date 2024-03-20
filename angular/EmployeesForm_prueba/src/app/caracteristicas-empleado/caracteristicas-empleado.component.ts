import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css'
})
export class CaracteristicasEmpleadoComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>;

  agregarCaracteristicas(value:string)
  {
    this.caracteristicasEmpleados.emit(value);
  }

}
