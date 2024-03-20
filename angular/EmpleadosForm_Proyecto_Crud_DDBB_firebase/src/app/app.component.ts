import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
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
}
