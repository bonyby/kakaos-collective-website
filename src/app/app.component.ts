import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './core/body/body.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kakaos-collective-website';
}
