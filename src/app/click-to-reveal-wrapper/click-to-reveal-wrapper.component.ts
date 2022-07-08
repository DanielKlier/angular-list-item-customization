import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-click-to-reveal-wrapper',
  templateUrl: './click-to-reveal-wrapper.component.html',
  styleUrls: ['./click-to-reveal-wrapper.component.css']
})
export class ClickToRevealWrapperComponent {
  @HostBinding('class.revealed')
  revealed = false;

  @HostListener('click')
  clicked() {
    this.revealed = true;
  }
}
