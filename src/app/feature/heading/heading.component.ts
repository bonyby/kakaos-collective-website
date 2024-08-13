import { Component, Input } from '@angular/core';
import { IconComponent } from '../../shared/images/icon/icon.component';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
})
export class HeadingComponent {
  @Input() Title: string = 'Title';
}
