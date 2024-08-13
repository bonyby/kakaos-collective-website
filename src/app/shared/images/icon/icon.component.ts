import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host: {
    class: 'colored-icon',
    '[style.mask-image]': 'MaskImage',
    '[style.background-color]': 'Color',
  },
})
export class IconComponent {
  @Input() IconSrc: string = '';
  @Input() Color: string = 'var(--primary-color)';

  get MaskImage() {
    return `url(${this.IconSrc})`;
  }
}
