import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

export const routes: Routes = [


        {path:"", component:HomeComponentComponent},
        {path:"proyecto", component:ProyectosComponentComponent},
        {path:"quienes", component:QuienesComponentComponent},
        {path:"contacto", component:ContactoComponentComponent},
        {path:"actualizar/:id", component:ActualizaComponentComponent},
        {path:"**", component:ErrorPersonalizadoComponent}
        
   
];
