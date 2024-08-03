import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private startBrightness = 35;
  BrightnessFilter = `brightness(${this.startBrightness}%)`;
  HeaderTop = '50%';
  HeaderOpacity = 1;

  @HostListener('window:scroll')
  onScroll() {
    let max = document.documentElement.clientHeight / 2;
    let t = window.scrollY / max;
    let brightness = 10 + (this.startBrightness - 10) * (1 - t);
    let headerTop = 50 + (75 - 50) * t;
    let headerOpacity = 1 + (0.6 - 1) * t;
    this.BrightnessFilter = `brightness(${brightness}%)`;
    this.HeaderTop = `${headerTop}%`;
    this.HeaderOpacity = headerOpacity;
  }

  getMaxScrollHeight(): number {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    return scrollHeight - clientHeight;
  }
}
