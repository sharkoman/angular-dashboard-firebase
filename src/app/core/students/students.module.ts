import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';

import { StudentsComponent } from './students.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentsOverviewComponent } from './students-overview/students-overview.component';
import { StudentModalComponent } from './../../shared/modals/modal/modal.component';
import { StudentRoutingModule } from './students-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    StudentRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    StudentsComponent,
    StudentViewComponent,
    StudentsOverviewComponent,
    StudentModalComponent,
  ],
  entryComponents: [
    StudentModalComponent,
  ]
})
export class StudentsModule { }
