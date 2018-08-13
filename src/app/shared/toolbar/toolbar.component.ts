import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  toggleSidebar: boolean = false;

  @Output() sideNavToggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggleSidebarHandler() {
    this.sideNavToggle.emit(!this.toggleSidebar);
  }

}
