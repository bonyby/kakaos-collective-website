import { Component, Input } from '@angular/core';

@Component({
  template: '',
  host: { class: 'content-block' },
})
export abstract class ContentBlockBaseComponent {
  @Input() Title: string = '';
}
