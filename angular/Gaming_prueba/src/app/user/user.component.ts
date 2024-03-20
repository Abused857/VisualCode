import { Component } from '@angular/core';
import { GamerComponent } from '../gamer/gamer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamerComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  username = 'german';
  isLoggedIn = false;
  greet(){
   alert('Welcome!')
  }

  favGame= '';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }

}
