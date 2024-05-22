import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { EmployeeSonComponent } from './employee-son/employee-son.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { empleadosService } from './empleados.service';
import { DataServices } from './data.services';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';
 const appRoutes:Routes=[
  {path:"", component:HomeComponentComponent},
  {path:"proyecto", component:ProyectosComponentComponent, canActivate:[LoginGuardian]},
  {path:"quienes", component:QuienesComponentComponent, canActivate:[LoginGuardian]},
  {path:"contacto", component:ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path:"actualizar/:id", component:ActualizaComponentComponent},
  {path:"login", component:LoginComponent},
  {path:"**", component:ErrorPersonalizadoComponent}


 ];
@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ErrorPersonalizadoComponent,
    ContactoComponentComponent,
    HomeComponentComponent,
    EmployeeSonComponent, 
    CaracteristicasEmpleadoComponent,
    EmployeeSonComponent,
    ActualizaComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [empleadosService, DataServices,ServicioEmpleadosService, LoginService, CookieService, LoginGuardian ],
  bootstrap: [AppComponent]
})
export class AppModule { }
