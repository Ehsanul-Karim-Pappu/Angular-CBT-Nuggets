import { Component } from '@angular/core';
import { myProfileData, friendsData } from "./data";
import { Person } from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myProfileData: Person = myProfileData;
  friendsData: Person[] = friendsData;
  title = "my-first-angular-app"
}
