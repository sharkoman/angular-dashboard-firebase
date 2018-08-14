import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  private authSubscription = new Subscription();
  authState:boolean = false;
  constructor(private authService :AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.authState = authStatus;
      }
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  @Output() closeSidebar = new EventEmitter();

  closeSideNav() {
    this.closeSidebar.emit(false);
  }

  logout() {
    this.authService.logOut();
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this.authState = authStatus;
      }
    );
    this.closeSidebar.emit(false);
  }
}
