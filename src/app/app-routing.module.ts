import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { OverviewComponent } from './core/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'dashboard/students', loadChildren: './core/students/students.module#StudentsModule', canActivate: [AuthGuard] },
  { path: 'dashboard/courses', loadChildren: './core/courses/courses.module#CoursesModule', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
