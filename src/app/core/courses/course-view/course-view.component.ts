import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from './../../students/student.service';
import { Course } from './../course.model';
import { CoursesService } from './../courses.service';
import { Student } from './../../students/student.model';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss']
})
export class CourseViewComponent implements OnInit, AfterViewInit {
  mode :string = '';
  pageTitle: string = "";
  courseID: string;
  courseViewed: Course;
  allStudents: Student[];
  startDate = new Date(1980, 0, 1);

  @ViewChild('f') courseForm: NgForm;

  constructor(
    private activateRoute: ActivatedRoute,
    private studentService: StudentService,
    private courseService: CoursesService,
    private router: Router) { }

  ngOnInit() {
    this.courseID = this.activateRoute.snapshot.params['id'];
    this.studentService.getStudents();
    this.studentService.studentsChanged
    .subscribe(students => this.allStudents = students);

    if(this.courseID === 'new') {
      this.mode = "new";
      this.pageTitle = "Add New Course";
    } else {
      this.mode = "update";
      this.courseViewed = this.courseService.getCourseById(this.courseID);
      this.pageTitle = "Edit Course " + this.courseViewed.name;
    }
  }

  ngAfterViewInit() {
    if(this.courseID !== 'new') {
      setTimeout(() => {
        this.courseForm.form.patchValue({
          id: this.courseViewed.id,
          name: this.courseViewed.name,
          date: this.courseViewed.date,
          description: this.courseViewed.description,
          students: this.courseViewed.students,
        });
      }, 500);
    }
  }

  onSubmit(f: NgForm) {
    if (this.mode === 'new') {
      this.courseService.addCourse(f.value);

    } else {
      this.courseService.updateCourse(f.value.id, f.value);
    }
    this.router.navigate(['/dashboard', 'courses']);
  }
}
