import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  dataSource = new MatTableDataSource<Course>();

  columnsToDisplay = ['id', 'name', 'action'];

  temp = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private courseService: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.data = this.courseService.getCourses();
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

}
