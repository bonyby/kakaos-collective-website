import { Component } from '@angular/core';
import { InfoContentBlockComponent } from '../../feature/content-blocks/info-content-block/info-content-block.component';
import { HeadingComponent } from '../../feature/heading/heading.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [InfoContentBlockComponent, HeadingComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
