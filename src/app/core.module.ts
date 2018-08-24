import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";
import { CoreRoutingModule } from "./core-routing.module";
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { OverviewComponent } from "./core/overview/overview.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AuthService } from "./auth/auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    CoreRoutingModule,
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    OverviewComponent,
  ],
  providers: [AuthService],
})
export class CoreModule {}
