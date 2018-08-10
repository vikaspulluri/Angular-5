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
import { GameControlComponent } from './assignment-four/game-control/game-control.component';
import { OddComponent } from './assignment-four/odd/odd.component';
import { EvenComponent } from './assignment-four/even/even.component';
import { AssignmentFiveComponent } from './assignment-five/assignment-five.component';
import { UsersService } from './assignment-five/users.service';
import { ActiveUsersComponent } from './assignment-five/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment-five/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentOneComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AssignmentFiveComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
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
