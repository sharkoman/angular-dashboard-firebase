import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';

import { StudentsComponent } from './students.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentsOverviewComponent } from './students-overview/students-overview.component';
import { StudentRoutingModule } from './students-routing.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentsComponent,
    StudentViewComponent,
    StudentsOverviewComponent,
  ]
})
export class StudentsModule { }
