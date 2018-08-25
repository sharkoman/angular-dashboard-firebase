import { Component, OnInit, EventEmitter , Output, OnDestroy } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  authSubscription: Subscription;
  toggleSidebar: boolean = false;
  isAuth:boolean = false;

  @Output() sideNavToggle = new EventEmitter<boolean>();
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }

  ngOnDestroy() {
    // this.authSubscription.unsubscribe();
  }

  toggleSidebarHandler() {
    this.sideNavToggle.emit(!this.toggleSidebar);
  }

  logout() {
    this.isAuth = false;
    this.authService.logOut();
  }

}
