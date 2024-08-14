import { Component, Input } from '@angular/core';
import { ContentBlockBaseComponent } from '../content-block-base/content-block-base.component';

@Component({
  selector: 'app-info-content-block',
  standalone: true,
  imports: [],
  templateUrl: './info-content-block.component.html',
  styleUrl: './info-content-block.component.scss',
})
export class InfoContentBlockComponent extends ContentBlockBaseComponent {
  @Input() Text: string = 'Text';
}
