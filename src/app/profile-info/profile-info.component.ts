import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../types";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() person: Person = {
    name : '',
    profilePicPath : '',
    age : 0,
    bio : '',
    birthday : '',
    interests : [],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
