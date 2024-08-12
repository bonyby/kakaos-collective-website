import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

import { ContentBlockBaseComponent } from '../content-block-base/content-block-base.component';
import { SliderContentBaseComponent } from './slider-content-base/slider-content-base.component';

@Component({
  selector: 'app-slider-content-block',
  standalone: true,
  imports: [],
  templateUrl: './slider-content-block.component.html',
  styleUrl: './slider-content-block.component.scss',
})
export class SliderContentBlockComponent
  extends ContentBlockBaseComponent
  implements AfterContentInit
{
  @ContentChildren(SliderContentBaseComponent)
  children!: QueryList<SliderContentBaseComponent>;

  private currentChildIndexInFocus: number = 0;

  ngAfterContentInit() {
    this.updateChildInFocus(0);
  }

  previous() {
    let index =
      this.currentChildIndexInFocus == 0
        ? this.children.length - 1
        : this.currentChildIndexInFocus - 1;

    this.updateChildInFocus(index);
  }

  next() {
    let index =
      this.currentChildIndexInFocus == this.children.length - 1
        ? 0
        : this.currentChildIndexInFocus + 1;

    this.updateChildInFocus(index);
  }

  updateChildInFocus(index: number) {
    this.children.get(this.currentChildIndexInFocus)?.removeInFocus();
    this.children.get(index)?.setInFocus();

    this.currentChildIndexInFocus = index;

    this.setPositions();
  }

  setPositions() {
    this.children.forEach((child, i) => {
      child.setPosition(i - this.currentChildIndexInFocus);
    });
  }
}
