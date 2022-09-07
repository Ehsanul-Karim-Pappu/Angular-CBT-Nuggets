import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  name = 'Khandaker Ehsanul Karim';
  profilePicPath = 'assets/passport%20size%20photo%202.jpg';
  age = 26;
  bio = 'I like Angular';
  birthday = 'March 3';
  interests = ['Programming', 'VLSI', 'Robotics', 'Reading'];

  constructor() { }

  ngOnInit(): void {
  }

}
