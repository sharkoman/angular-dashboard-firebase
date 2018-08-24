import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { CoreModule } from './core.module';
import { CoursesModule } from './core/courses/courses.module';
import { StudentsModule } from './core/students/students.module';

import { AppComponent } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { OverviewComponent } from './core/overview/overview.component';

import { AuthService } from './auth/auth.service';
import { StudentService } from './core/students/student.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavListComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CoreModule,
    StudentsModule,
    CoursesModule,
    AppRoutingModule,
  ],
  entryComponents: [

  ],
  providers: [AuthService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
