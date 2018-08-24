import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CoursesOverviewComponent } from './courses-overview/courses-overview.component';
import { MaterialModule } from './../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesService } from './courses.service';
import { DeleteCourseModalComponent } from '../../shared/modals/delete-course-modal/delete-course-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    CoursesRoutingModule,
  ],
  declarations: [
    DeleteCourseModalComponent,
    CoursesComponent,
    CourseViewComponent,
    CoursesOverviewComponent,
  ],
  providers: [CoursesService],
  entryComponents: [
    DeleteCourseModalComponent,
  ]
})
export class CoursesModule {}
