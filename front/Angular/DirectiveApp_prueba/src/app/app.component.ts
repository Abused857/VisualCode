import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User Register';
  mensaje = '';
  invalid= 'invalid data.';
  validData: boolean = false;
  showInvalidMessage:boolean = false;
  showInvalidMessage2:boolean = false;
  registered = false;
  name:string = '';
  apellido:string = '';
  entradas: any[];
  cargo:string ="";
   

  constructor()
  {
    this.entradas = [

      { id: 1, titulo: "Mi primer post sobre Angular" },
      { id: 2, titulo: "Cómo mejorar el rendimiento de tu aplicación" },
      { id: 3, titulo: "Consejos para diseñar interfaces de usuario atractivas" },
      { id: 4, titulo: "Introducción a la programación reactiva con RxJS" },
      { id: 5, titulo: "Tutorial paso a paso para crear un formulario en Angular" },
      { id: 6, titulo: "Los beneficios del enrutamiento en una aplicación Angular" },
      { id: 7, titulo: "Principales prácticas de seguridad en aplicaciones web" },
      { id: 8, titulo: "Explorando las nuevas características de Angular 12" },
      { id: 9, titulo: "Guía completa para desplegar una aplicación Angular en producción" },
      { id: 10, titulo: "Cómo realizar pruebas unitarias en Angular con Jasmine" }
    ]
  }

  userRegist()
  {
    if(this.name == '' && this.apellido == ''){this.showInvalidMessage2 = true}
    if (this.name !== '' && this.apellido !== '') {
      this.mensaje = 'Registered user successfully';
      this.registered = true;
      this.showInvalidMessage = false; 
      this.validData = true;
      this.showInvalidMessage2 = false;
    }else {
      this.showInvalidMessage = true;
      this.validData = false; 
      this.showInvalidMessage2 = false;
    }
  }
}
