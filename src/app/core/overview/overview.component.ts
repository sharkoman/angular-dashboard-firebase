import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  coursesRows = [{
      id: 'corse-01',
      name: 'HTML5 Essential',
      date: '3/3/2018',
      students: [{
          name: 'sherif ahmed',
          email: 'sharko@test.com'
        },
        {
          name: 'Norhan Hakam',
          email: 'norhan@test.com'
        },
      ]
    },
    {
      id: 'corse-02',
      name: 'Javascript Essential',
      date: '4/3/2018',
      students: [{
          name: 'sherif ahmed',
          email: 'sharko@test.com'
        },
        {
          name: 'Norhan Hakam',
          email: 'norhan@test.com'
        },
      ]
    },
  ];
  coursesColumns = [{
      prop: 'name',
      name: 'Course Title',
      flexGrow: 2,
      width: 225
    },
    {
      prop: 'date',
      name: 'Date',
      flexGrow: 1,
      width: 110
    },
    {
      prop: 'studentsNumber',
      name: 'Students No.',
      flexGrow: 0
    }
  ];
  coursesRowsUpdated = null;


  constructor() {}

  ngOnInit() {
    this.coursesRowsUpdated = this.coursesRows.map(el => {
      return { ...el, studentsNumber: el.students.length.toString() }
    });
    console.log(this.coursesRowsUpdated);
  }

}
