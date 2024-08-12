import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  template: '',
  host: {
    class: 'slider-content-container',
  },
  animations: [
    trigger('translate', [
      state('*', style({ transform: '{{ position }}' }), {
        params: { position: `translate(0%)` },
      }),
      transition('* => *', [
        animate('0.25s ease-out', style({ transform: '{{ position }}' })),
      ]),
    ]),
  ],
})
export abstract class SliderContentBaseComponent {
  DesiredPosition: string = `translate(0%)`;

  @HostBinding('class.in-focus') InFocus = false;

  setInFocus() {
    this.InFocus = true;
  }

  removeInFocus() {
    this.InFocus = false;
  }

  setPosition(position: number) {
    this.DesiredPosition = `translate(${100 * position}%)`;
  }

  @HostBinding('@translate') get translateState() {
    return {
      value: this.DesiredPosition,
      params: {
        position: this.DesiredPosition,
      },
    };
  }
}
