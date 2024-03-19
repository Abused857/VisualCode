import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { empleadosService } from './empleados.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ServicioEmpleadosService, empleadosService]
};
