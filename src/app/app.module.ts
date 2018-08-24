import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import {StudentsModule} from './core/students/students.module';


import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AuthService } from './auth/auth.service';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { CoursesService } from './core/courses/courses.service';
import { OverviewComponent } from './core/overview/overview.component';
import { DeleteCourseModalComponent } from './shared/modals/delete-course-modal/delete-course-modal.component';
import { StudentService } from './core/students/student.service';
import { StudentModalComponent } from './shared/modals/modal/modal.component';
import { CoursesModule } from './core/courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavListComponent,
    OverviewComponent,
    DeleteCourseModalComponent,
    StudentModalComponent,
  ],
  imports: [
    BrowserModule,
    StudentsModule,
    CoursesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  entryComponents: [
    StudentModalComponent,
    DeleteCourseModalComponent,
  ],
  providers: [AuthService, CoursesService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
