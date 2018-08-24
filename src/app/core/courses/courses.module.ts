import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CoursesOverviewComponent } from './courses-overview/courses-overview.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    CoursesRoutingModule,
  ],
  declarations: [
    CoursesComponent,
    CourseViewComponent,
    CoursesOverviewComponent,
  ],
})
export class CoursesModule {}
