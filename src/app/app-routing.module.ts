import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { CoursesComponent } from './core/courses/courses.component';
import { StudentsComponent } from './core/students/students.component';
import { OverviewComponent } from './core/overview/overview.component';
import { CourseViewComponent } from './core/course-view/course-view.component';
import { StudentViewComponent } from './core/student-view/student-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'courses/:id', component: CourseViewComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'students/:id', component: StudentViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
