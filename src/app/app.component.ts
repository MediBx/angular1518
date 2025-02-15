
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<p appHighlight> my highlighted text  </p>`,
  imports: [HighlightDirective]
})
export class AppComponent { }
