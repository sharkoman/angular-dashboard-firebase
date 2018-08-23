import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentService } from './../students/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit, AfterViewInit {

  studentObjId: string;

  @ViewChild('f') studentForm: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentObjId = this.activatedRoute.snapshot.params['id'];
  }

  ngAfterViewInit() {
    if(this.studentObjId !== 'new') {
      setTimeout(() => {
        const studentObj = this.studentService.getStudentById(this.studentObjId);
        this.studentForm.setValue(studentObj);
      }, 100);
    }
  }

  onSubmit(f: NgForm) {
    if (this.studentObjId === 'new') {
      this.studentService.addStudent(f.value);
      this.router.navigate(['/dashboard', 'students']);
    } else {
      this.studentService.updateStudent(this.studentObjId, f.value);
      this.router.navigate(['/dashboard', 'students']);
    }
  }

}
