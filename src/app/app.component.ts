import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavOpened: boolean = false;
  authState: boolean = false;

  toggleSidebar(toggleEvent) {
    this.sideNavOpened = toggleEvent;
  }

  closeSidebar(sidebarState) {
    this.sideNavOpened = sidebarState;
  }
}
