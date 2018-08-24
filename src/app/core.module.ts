import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CoreRoutingModule,

  ],
  declarations: [
    LoginComponent
  ],
  providers: [],
})
export class CoreModule {}
