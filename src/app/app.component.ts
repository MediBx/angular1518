import {
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h1>Welcome to Angular!</h1> 
                  <button (click)="loadChild()">Load Child Component</button> 
                  <ng-container #container></ng-container>`,
  standalone: true
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  async loadChild() {
    const { ChildComponent } = await import('./child/child.component');
    this.container.clear();
    this.container.createComponent(ChildComponent);
  }
}