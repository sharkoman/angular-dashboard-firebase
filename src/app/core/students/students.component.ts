import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  dataSource: Student[] = [];
  columnsToDisplay = ['id', 'name', 'email', 'age', 'image', 'action'];

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.dataSource = this.studentService.getStudents();
  }

  addStudent() {
    this.router.navigate(['dashboard/students', 'new']);
  }

  editStudent(id) {
    console.log(id);
    this.router.navigate(['dashboard/students', id]);
  }

}
