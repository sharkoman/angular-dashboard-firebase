import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { StudentModalComponent } from './../../../shared/modals/modal/modal.component';
import { Student } from './../student.model';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-students-overview',
  templateUrl: './students-overview.component.html',
  styleUrls: ['./students-overview.component.scss']
})
export class StudentsOverviewComponent implements OnInit, OnDestroy {

  dataSource: Student[] = [];
  originalStudents: Student[];

  studentSubject: Subscription;
  studentsChangeSubscription :Subscription;

  columnsToDisplay = ['id', 'name', 'email', 'age', 'image', 'action'];
  filterArray: Student[];
  studentImage = {
    backgroundImage: "url('https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg')",
  }

  startSlice: number = 3;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.studentService.getStudents();

    this.studentsChangeSubscription = this.studentService.studentsChanged.subscribe(
      students => {
        this.originalStudents = students;
        this.dataSource = students.slice(0, this.startSlice);
        this.filterArray = this.dataSource;
      }
    );

    this.studentSubject = this.studentService.studentDeleted.subscribe(
      r => {
        this.dataSource = r.slice();
        this.filterArray = this.dataSource;
      }
    );

  }

  onScroll() {

    if ( this.dataSource.length < this.originalStudents.length ) {
      let nextArray = this.originalStudents.slice(this.filterArray.length, this.filterArray.length+3);
      this.filterArray = this.filterArray.concat(nextArray);
    }
  }

  ngOnDestroy() {
    this.studentSubject.unsubscribe();
  }

  doFilter(filterValue: string) {
    this.filterArray = this.dataSource.filter(el => {
      return el.name.trim().toLowerCase().match(filterValue);
    });
  }

  addStudent() {
    this.router.navigate(['dashboard/students', 'new']);
  }

  editStudent(id) {
    this.router.navigate(['dashboard/students', id]);
  }

  openDialog(studentID): void {
    const studentObj = this.studentService.getStudentById(studentID);

    this.dialog.open(StudentModalComponent, {
      width: '450px',
      data: {studentName: studentObj.name, studentID: studentObj.id}
    });
  }



}
