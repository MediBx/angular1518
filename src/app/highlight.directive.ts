
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true // באנגולר 15 אין צורך להוסיף לכל הנחיה
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
}
