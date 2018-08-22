import {Component, OnInit} from '@angular/core';
import { CoursesService } from "../courses/courses.service";
import { Course } from './../courses/course.model';
import { Student } from './../students/student.model';
import { StudentService } from './../students/student.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  coursesRows :Course[];
  coursesColumns = [
    {
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

  studentsRows :Student[];
  studentsColumns = [
    {
      prop: 'name',
      name: 'Student Title',
    },
    {
      prop: 'email',
      name: 'Email',
    },
    {
      prop: 'age',
      name: 'Age',
    },
  ];

  constructor(
    private coursesService: CoursesService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.coursesRows = this.coursesService.getCourses();
    this.coursesRowsUpdated = this.coursesRows.map(el => {
      return { ...el, studentsNumber: el.students.length.toString() }
    });

    this.studentsRows = this.studentService.getStudents();
  }

}
