import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  CurrentBrightness = 100;
  BrightnessFilter = `brightness(${this.CurrentBrightness}%)`;
  private intervalId: any;
  private currentYScroll = 0;

  @HostListener('window:wheel', ['$event.deltaY'])
  onScroll(deltaY: number) {
    clearInterval(this.intervalId);
    let min = 0;
    let max = this.getMaxScrollHeight();
    this.currentYScroll = Math.min(
      Math.max(this.currentYScroll + Math.round(deltaY), min),
      max
    );
    let t = 1 - this.currentYScroll / max;
    let brightness = 25 + (100 - 25) * t;
    let currentStep = 0;
    let steps = 10;
    const startValue = this.CurrentBrightness;
    const stepIncrement = (brightness - startValue) / steps;
    this.intervalId = setInterval(() => {
      this.CurrentBrightness = startValue + stepIncrement * currentStep;
      this.BrightnessFilter = `brightness(${this.CurrentBrightness}%)`;
      // Stop the interval when the final value is reached
      if (currentStep >= steps) {
        clearInterval(this.intervalId);
      }
      currentStep++;
      console.log(this.BrightnessFilter);
    }, 5);
  }

  getMaxScrollHeight(): number {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    return scrollHeight - clientHeight;
  }
}
