import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Boceto de calculadora';

  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  add():void
  {
    this.resultado = this.numero1 + this.numero2;
  }
  rest():void
  {
    this.resultado = this.numero1 - this.numero2;
  }
}
