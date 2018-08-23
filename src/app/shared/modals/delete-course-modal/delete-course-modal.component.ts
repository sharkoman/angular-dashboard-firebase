import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CoursesService } from './../../../core/courses/courses.service';

@Component({
  selector: 'app-delete-course-modal',
  templateUrl: './delete-course-modal.component.html',
  styleUrls: ['./delete-course-modal.component.scss']
})
export class DeleteCourseModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCourseModalComponent>,
    private courseService: CoursesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteCourse(studentID) {
    this.courseService.deleteCourse(studentID);
  }

  ngOnInit() {
  }

}
