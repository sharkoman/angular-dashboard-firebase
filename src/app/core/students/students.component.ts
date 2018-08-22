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

  constructor(
    private studentService: StudentService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = this.studentService.getStudents();
    this.studentSubject = this.studentService.studentDeleted.subscribe(
      r => this.dataSource = r.slice()
    );
  }

  ngOnDestroy() {
    this.studentSubject.unsubscribe();
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
