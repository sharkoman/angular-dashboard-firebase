import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AuthService } from './auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

import { CoreModule } from './core.module';

import { AppComponent } from './app.component';

import { StudentService } from './core/students/student.service';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { CoursesService } from './core/courses/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavListComponent,
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
    AppRoutingModule,
  ],
  entryComponents: [
  ],
  providers: [AuthService, StudentService, AngularFireAuth, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
