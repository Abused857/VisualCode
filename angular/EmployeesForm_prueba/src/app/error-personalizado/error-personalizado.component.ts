import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error-personalizado',
  standalone: true,
  imports: [],
  templateUrl: './error-personalizado.component.html',
  styleUrl: './error-personalizado.component.css'
})
export class ErrorPersonalizadoComponent {
  constructor(private router:Router){}

  regresar(){
    this.router.navigate([""]);
  }

}
