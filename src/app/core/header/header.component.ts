import { Component, HostListener } from '@angular/core';
import NumberInterpolator from '../../shared/math/numberInterpolator';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private startBrightness = 35;
  private endBrightness = 10;
  BrightnessFilter = `brightness(${this.startBrightness}%)`;

  private startTop = 50;
  private endTop = 75;
  HeaderTop = `${this.startTop}%`;

  private startOpacity = 1;
  private endOpacity = 0.6;
  HeaderOpacity = 1;

  @HostListener('window:scroll')
  onScroll() {
    let maxScroll = document.documentElement.clientHeight / 2;
    let t = window.scrollY / maxScroll;

    let brightness = NumberInterpolator.GetValue(
      this.startBrightness,
      this.endBrightness,
      t
    );
    this.BrightnessFilter = `brightness(${brightness}%)`;

    let headerTop = NumberInterpolator.GetValue(this.startTop, this.endTop, t);
    this.HeaderTop = `${headerTop}%`;

    let headerOpacity = NumberInterpolator.GetValue(
      this.startOpacity,
      this.endOpacity,
      t
    );
    this.HeaderOpacity = headerOpacity;
  }
}
