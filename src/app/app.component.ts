import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened: boolean = false;

  toggleSidebar(toggleEvent) {
    this.opened = toggleEvent;
  }
}
