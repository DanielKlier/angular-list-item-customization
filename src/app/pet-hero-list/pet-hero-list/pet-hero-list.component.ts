import { Component, Input, TemplateRef } from '@angular/core';
import { PetHeroData } from '../pet-hero-data';

@Component({
  selector: 'app-pet-hero-list',
  templateUrl: './pet-hero-list.component.html',
  styleUrls: ['./pet-hero-list.component.css']
})
export class PetHeroListComponent {
  @Input() petHeroData: PetHeroData[] = [];
  @Input() itemWrapper?: TemplateRef<unknown>;
}
