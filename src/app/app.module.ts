import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickToRevealWrapperModule } from './click-to-reveal-wrapper/click-to-reveal-wrapper.module';
import { PetHeroListModule } from './pet-hero-list/pet-hero-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetHeroListModule,
    ClickToRevealWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
