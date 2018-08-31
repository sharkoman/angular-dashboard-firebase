import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentService } from './../student.service';
import { Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit, AfterViewInit {

  studentObjId: string;
  studentObj: Student;

  @ViewChild('f') studentForm: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.studentObjId = this.activatedRoute.snapshot.params['id'];
    const stIndex = this.studentService.availableStudents.findIndex(el => {
      return el.id == this.studentObjId;
    });
    this.studentObj = this.studentService.availableStudents[stIndex];
  }

  ngAfterViewInit() {
    if(this.studentObjId !== 'new') {
      setTimeout(() => {
        this.studentForm.form.patchValue(this.studentObj);
      }, 100);
    }
  }

  onSubmit(f: NgForm) {
    if (this.studentObjId === 'new') {
      const submitStudentObj = {
        age: f.value.age,
        creationDate: new Date(),
        email: f.value.email,
        id: f.value.id,
        image: f.value.image,
        name: f.value.name,
      }
      this.studentService.addStudent(submitStudentObj);
      this.router.navigate(['/dashboard', 'students']);
    } else {
      this.studentService.updateStudent(this.studentObjId, f.value);
      this.router.navigate(['/dashboard', 'students']);
    }
  }

  cancleEditStudent() {
    this.router.navigate(['/dashboard', 'students']);
  }

}
