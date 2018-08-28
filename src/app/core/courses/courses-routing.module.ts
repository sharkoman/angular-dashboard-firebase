import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../auth/auth.guard';
import { CoursesComponent } from './courses.component';
import { CoursesOverviewComponent } from './courses-overview/courses-overview.component';
import { CourseViewComponent } from './course-view/course-view.component';

const coursesRouting :Routes = [
  { path: '', component: CoursesComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'courses-overview', pathMatch: 'full' },
      { path: 'courses-overview', component: CoursesOverviewComponent},
      { path: ':id', component: CourseViewComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRouting),
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CoursesRoutingModule {}
