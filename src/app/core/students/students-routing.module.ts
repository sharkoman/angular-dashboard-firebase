import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../auth/auth.guard';
import { StudentsComponent } from './students.component';
import { StudentsOverviewComponent } from './students-overview/students-overview.component';
import { StudentViewComponent } from './student-view/student-view.component';

const studentsRouting :Routes = [
  { path: 'dashboard/students', component: StudentsComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'all-students', pathMatch: 'full' },
      { path: 'all-students', component: StudentsOverviewComponent },
      { path: ':id', component: StudentViewComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(studentsRouting),
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class StudentRoutingModule {}
