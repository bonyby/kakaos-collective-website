import { Component } from '@angular/core';
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
export class BlockInfoSliderContentComponent extends SliderContentBaseComponent {}
