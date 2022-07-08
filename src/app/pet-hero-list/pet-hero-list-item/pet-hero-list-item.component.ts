import { Component, Input } from '@angular/core';
import { PetHeroData } from '../pet-hero-data';

@Component({
  selector: 'app-pet-hero-list-item',
  templateUrl: './pet-hero-list-item.component.html',
  styleUrls: ['./pet-hero-list-item.component.css']
})
export class PetHeroListItemComponent {
  @Input() petHero?: PetHeroData;
}
