import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
  host: { class: 'cta-container' },
})
export class CtaButtonComponent {
  @Input() Text: string = '';
  @Input() Url: string = '';
}
