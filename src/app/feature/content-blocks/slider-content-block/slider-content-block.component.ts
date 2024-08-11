import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

import { SliderContentBaseComponent } from './slider-content-base/slider-content-base.component';

@Component({
  selector: 'app-slider-content-block',
  standalone: true,
  imports: [],
  templateUrl: './slider-content-block.component.html',
  styleUrl: './slider-content-block.component.scss',
})
export class SliderContentBlockComponent implements AfterContentInit {
  @ContentChildren(SliderContentBaseComponent)
  children!: QueryList<SliderContentBaseComponent>;

  private currentChildIndexInFocus: number = 0;

  ngAfterContentInit() {
    this.currentChildIndexInFocus = 0;
    this.setPositions();
  }

  clicked() {
    this.currentChildIndexInFocus =
      this.currentChildIndexInFocus == this.children.length - 1
        ? 0
        : this.currentChildIndexInFocus + 1;

    this.setPositions();
  }

  setPositions() {
    this.children.forEach((child, i) => {
      child.SetPosition(i - this.currentChildIndexInFocus);
    });
  }
}
