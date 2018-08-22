import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from '../../../core/students/student.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class StudentModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StudentModalComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteStudent(studentID) {
    this.studentService.deleteStudent(studentID);
    console.log('delete: ' + studentID);
  }

  ngOnInit() {
  }

}
