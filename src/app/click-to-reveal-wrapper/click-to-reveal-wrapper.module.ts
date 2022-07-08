import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickToRevealWrapperComponent } from './click-to-reveal-wrapper.component';



@NgModule({
  declarations: [
    ClickToRevealWrapperComponent
  ],
  exports: [
    ClickToRevealWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClickToRevealWrapperModule { }
