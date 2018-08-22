import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DeleteCourseModalComponent } from '../../shared/modals/delete-course-modal/delete-course-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource = new MatTableDataSource<Course>();

  columnsToDisplay = ['id', 'name', 'date', 'students', 'action'];

  temp = [];

  courseSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private courseService: CoursesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource.data = this.courseService.getCourses();
    this.courseSubscription = this.courseService.courseDeletedSubject.subscribe(
      r => this.dataSource.data = r
    )
  }

  ngOnDestroy() {
    this.courseSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCourse() {
    this.router.navigate(['/dashboard/courses/', 'new']);
  }

  editCourse(id) {
    this.router.navigate(['/dashboard/courses/', id ]);
  }

  openDialog(id) {
    const courseObj = this.courseService.getCourseById(id);
    this.dialog.open(DeleteCourseModalComponent, {
      width: '450px',
      data: { courseName: courseObj.name, courseID: courseObj.id }
    });
  }

}
