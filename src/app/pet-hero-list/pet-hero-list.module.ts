import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickToRevealWrapperModule } from '../click-to-reveal-wrapper/click-to-reveal-wrapper.module';
import { PetHeroListItemComponent } from './pet-hero-list-item/pet-hero-list-item.component';
import { PetHeroListComponent } from './pet-hero-list/pet-hero-list.component';


@NgModule({
  declarations: [
    PetHeroListComponent,
    PetHeroListItemComponent
  ],
  imports: [
    CommonModule,
    ClickToRevealWrapperModule
  ],
  exports: [PetHeroListComponent]
})
export class PetHeroListModule {
}
