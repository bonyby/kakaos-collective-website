import { Component, Input } from '@angular/core';
import { ContentBlockBaseComponent } from '../content-block-base/content-block-base.component';

@Component({
  selector: 'app-media-content-block',
  standalone: true,
  imports: [],
  templateUrl: './media-content-block.component.html',
  styleUrl: './media-content-block.component.scss',
  host: { class: 'rounded' },
})
export class MediaContentBlockComponent extends ContentBlockBaseComponent {
  @Input() Src: string = '';
  @Input() Alt: string = '';
}
