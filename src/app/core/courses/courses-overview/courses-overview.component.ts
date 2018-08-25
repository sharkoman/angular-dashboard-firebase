import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from './../courses.service';
import { Course } from './../course.model';
import { DeleteCourseModalComponent } from './../../../shared/modals/delete-course-modal/delete-course-modal.component';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.scss']
})
export class CoursesOverviewComponent implements OnInit, AfterViewInit, OnDestroy {


  dataSource = new MatTableDataSource<Course>();

  columnsToDisplay = ['id', 'name', 'date', 'students', 'action'];

  temp = [];

  courseSubscription: Subscription;

  coursesChangeSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.coursesService.getCourses();
    this.coursesChangeSubscription = this.coursesService.coursesChanged.subscribe(
      courses => {
        console.log(courses);
        this.dataSource.data = courses;
      }
    );
  }

  ngOnDestroy() {
    this.coursesChangeSubscription.unsubscribe();
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
    const courseObj = this.coursesService.getCourseById(id);
    this.dialog.open(DeleteCourseModalComponent, {
      width: '450px',
      data: { courseName: courseObj.name, courseID: courseObj.id }
    });
  }


}
