import { Component } from '@angular/core';
import { InfoContentBlockComponent } from '../../feature/content-blocks/info-content-block/info-content-block.component';
import { MediaContentBlockComponent } from '../../feature/content-blocks/media-content-block/media-content-block.component';
import { BlockInfoSliderContentComponent } from '../../feature/content-blocks/slider-content-block/block-info-slider-content/block-info-slider-content.component';
import { ImageSliderContentComponent } from '../../feature/content-blocks/slider-content-block/image-slider-content/image-slider-content.component';
import { SliderContentBlockComponent } from '../../feature/content-blocks/slider-content-block/slider-content-block.component';
import { CtaButtonComponent } from '../../feature/cta-button/cta-button.component';
import { HeadingComponent } from '../../feature/heading/heading.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    InfoContentBlockComponent,
    HeadingComponent,
    SliderContentBlockComponent,
    BlockInfoSliderContentComponent,
    CtaButtonComponent,
    MediaContentBlockComponent,
    ImageSliderContentComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
