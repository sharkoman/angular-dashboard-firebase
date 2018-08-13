import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
// import { ToolbarComponent } from './../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('students').valueChanges().subscribe((r) => {
      console.log(r);
    });
  }

}
