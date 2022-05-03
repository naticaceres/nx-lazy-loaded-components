import { Component } from '@angular/core';

@Component({
  selector: 'lazy-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = true;
  title = 'web';

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
