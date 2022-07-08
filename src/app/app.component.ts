import { Component } from '@angular/core';
import { PetHeroData } from './pet-hero-list/pet-hero-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  petHeroData: PetHeroData[] = [
    {
      soundBite: 'Graww-Wuff!',
      species: 'Growl-Corgie'
    },
    {
      soundBite: 'Mee-Ciao',
      species: 'Catzilla'
    }
  ]
}
