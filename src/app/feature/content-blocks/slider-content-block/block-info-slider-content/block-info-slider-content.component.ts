import { Component, Input } from '@angular/core';
import { SliderContentBaseComponent } from '../slider-content-base/slider-content-base.component';

@Component({
  selector: 'app-block-info-slider-content',
  standalone: true,
  imports: [],
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
  @Input() ImageName: string = '';

  get ImageUrl() {
    return `assets/blocks/${this.ImageName}`;
  }
}
