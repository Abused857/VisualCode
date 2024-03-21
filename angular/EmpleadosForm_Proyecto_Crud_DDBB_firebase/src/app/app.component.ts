import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  constructor(private login:LoginService){}
  ngOnInit(): void {
    firebase.initializeApp
    (
      {
        apiKey: "AIzaSyDsxEGCzBxb9J1ivILkW8R3NTqRAi4by98",
        authDomain: "mis-clientes-90acb.firebaseapp.com",
      }
    );
  }
  title = 'EmpleadosForm';


  estaLogeado()
  {
    return this.login.estaLogueado();
  }
  logout()
  {
    return this.login.logout();
  }


}
