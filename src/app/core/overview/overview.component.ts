import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from "../courses/courses.service";
import { Course } from './../courses/course.model';
import { Student } from './../students/student.model';
import { StudentService } from './../students/student.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  coursesRows :Course[];

  coursesColumns = [
    {
      prop: 'name',
      name: 'Course Title',
      flexGrow: 2,
      width: 225
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

  studentsChangeSubscription: Subscription;

  coursesChangeSubscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private studentService: StudentService,
    private db: AngularFirestore,
  ) {}

  ngOnInit() {
    this.coursesService.getCourses();
    this.coursesChangeSubscription = this.coursesService.coursesChanged.subscribe(
      r => {
        this.coursesRows = r;
        this.coursesRowsUpdated = this.coursesRows.map(el => {
          return { ...el, studentsNumber: el.students.length.toString() }
        });
        console.log(this.coursesRowsUpdated);
      }
    );

    this.studentService.getStudents();
    this.studentsChangeSubscription = this.studentService.studentsChanged.subscribe(students => {
      this.studentsRows = students
    });
  }

  ngOnDestroy() {
    this.coursesChangeSubscription.unsubscribe();
    this.studentsChangeSubscription.unsubscribe();
  }

}
