import { Component, Input } from '@angular/core';

@Component({
  template: '',
  styleUrl: './slider-content-base.component.scss',
  host: {
    class: 'slider-content-container',
    '[style.transform]': 'transform',
  },
})
export abstract class SliderContentBaseComponent {
  @Input() Name: string = '';

  private transform: string = `translate(0%)`;

  SetPosition(position: number) {
    this.transform = `translate(${100 * position}%)`;
  }
}
