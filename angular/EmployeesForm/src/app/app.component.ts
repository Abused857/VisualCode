import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Employee } from './employee.component';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { CommonModule } from '@angular/common';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { empleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { routes } from './app.routes';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, EmployeeSonComponent,
     CommonModule, HomeComponentComponent, ContactoComponentComponent,ProyectosComponentComponent,
      QuienesComponentComponent,RouterLink, RouterLinkActive,RouterModule,
    ActualizaComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

  

}
