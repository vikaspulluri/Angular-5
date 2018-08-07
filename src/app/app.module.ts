import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssignmentOneComponent } from './assignment-one/assignment-one.component';
import { SuccessAlertComponent } from './assignment-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignment-one/warning-alert/warning-alert.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentOneComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
