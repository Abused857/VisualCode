import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-gamer',
  standalone: true,
  imports: [],
  templateUrl: './gamer.component.html',
  styleUrl: './gamer.component.css'
})
export class GamerComponent {

  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName:string)
  {
    this.addFavoriteEvent.emit(gameName);
  }

  games = 
  [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon zero dawn'
    },
    {
      id: 3,
      name: 'Elden Ring'
    },
    {
      id: 4,
      name: 'Red Dead Redemption'
    },
    {
      id:5,
      name: 'Assasin´s Creed: Valhalla'
    },
    {
      id: 6,
      name: 'Valorant'
    }

  ]

}
