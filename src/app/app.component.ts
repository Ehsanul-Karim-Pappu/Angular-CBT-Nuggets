import { Component } from '@angular/core';
import { Person } from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPerson: Person = {
    name : 'Khandaker Ehsanul Karim',
    profilePicPath : 'assets/passport%20size%20photo%202.jpg',
    age : 26,
    bio : 'I like Angular',
    birthday : 'March 3',
    interests : ['Programming', 'VLSI', 'Robotics', 'Reading'],
  };
  title = "my-first-angular-app"
}
