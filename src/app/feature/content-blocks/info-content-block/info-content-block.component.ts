import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-content-block',
  standalone: true,
  imports: [],
  templateUrl: './info-content-block.component.html',
  styleUrl: './info-content-block.component.scss',
  host: { class: 'content-block' },
})
export class InfoContentBlockComponent {
  @Input() Text: string = 'Text';
}
