import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { StudentModalComponent } from './../../shared/modals/modal/modal.component';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  dataSource: Student[] = [];
  studentSubject: Subscription;
  columnsToDisplay = ['id', 'name', 'email', 'age', 'image', 'action'];
  filterArray: Student[];
  studentImage = {
    backgroundImage: "url('https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249394.jpg')",
  }

  constructor(
    private studentService: StudentService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = this.studentService.getStudents();
    this.studentSubject = this.studentService.studentDeleted.subscribe(
      r => {
        this.dataSource = r.slice();
        this.filterArray = this.dataSource;
      }
    );
    this.filterArray = this.dataSource;
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
    console.log(id);
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
