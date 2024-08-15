import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import NumberInterpolator from '../../shared/math/number-interpolator';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private startBannerBrightness = 100;
  private endBannerBrightness = 10;
  BannerBrightness = `brightness(${this.startBannerBrightness}%)`;

  private startBannerOpacity = 1;
  private endBannerOpacity = 1;
  BannerOpacity = this.startBannerOpacity;

  private startTitleTop = 50;
  private endTitleTop = 95;
  TitleTop = `${this.startTitleTop}%`;

  private startTitleOpacity = 1;
  private endTitleOpacity = 0.6;
  TitleOpacity = 1;

  @HostListener('window:scroll')
  onScroll() {
    let maxScroll = document.documentElement.clientHeight;
    let t = Math.min(window.scrollY / maxScroll, 1);

    let bannerOpacity = NumberInterpolator.GetValue(
      this.startBannerOpacity,
      this.endBannerOpacity,
      t
    );
    this.BannerOpacity = bannerOpacity;

    let bannerBrightness = NumberInterpolator.GetValue(
      this.startBannerBrightness,
      this.endBannerBrightness,
      t
    );
    this.BannerBrightness = `brightness(${bannerBrightness}%)`;

    let titleTop = NumberInterpolator.GetValue(
      this.startTitleTop,
      this.endTitleTop,
      t
    );
    this.TitleTop = `${titleTop}%`;

    let titleOpacity = NumberInterpolator.GetValue(
      this.startTitleOpacity,
      this.endTitleOpacity,
      t
    );
    this.TitleOpacity = titleOpacity;
  }
}
