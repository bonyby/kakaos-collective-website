import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../../shared/images/icon/icon.component';
import { SliderContentBaseComponent } from '../slider-content-base/slider-content-base.component';

@Component({
  selector: 'app-block-info-slider-content',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './block-info-slider-content.component.html',
  styleUrl: './block-info-slider-content.component.scss',
  providers: [
    {
      provide: SliderContentBaseComponent,
      useExisting: BlockInfoSliderContentComponent,
    },
  ],
})
export class BlockInfoSliderContentComponent extends SliderContentBaseComponent {
  @Input() BlockName: string = '';
  @Input() Health: string = '???';
  @Input() Effect: string = '';
  @Input() ImageName: string = '';

  get Hits() {
    return `Takes ${this.Health} hits!`;
  }

  get ImageUrl() {
    return `assets/blocks/${this.ImageName}`;
  }
}
