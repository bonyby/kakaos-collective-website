import { Component, Input } from '@angular/core';
import { SliderContentBaseComponent } from '../slider-content-base/slider-content-base.component';

@Component({
  selector: 'app-image-slider-content',
  standalone: true,
  imports: [],
  templateUrl: './image-slider-content.component.html',
  styleUrl: './image-slider-content.component.scss',
  providers: [
    {
      provide: SliderContentBaseComponent,
      useExisting: ImageSliderContentComponent,
    },
  ],
})
export class ImageSliderContentComponent extends SliderContentBaseComponent {
  @Input() Src: string = '';
  @Input() Alt: string = '';
}
