import { Person } from '../types';

export const myProfileData: Person = {
  name : 'Khandaker Ehsanul Karim',
  profilePicPath : 'assets/passport%20size%20photo%202.jpg',
  age : 26,
  bio : 'I like Angular',
  birthday : 'March 3',
  interests : ['Programming', 'VLSI', 'Robotics', 'Reading'],
}

export const friendsData: Person[] = [{
  name : 'Hasib',
  profilePicPath : 'assets/hasib.jpg',
  age : 30,
  bio : 'I do not like Angular',
  birthday : 'April 12',
  interests : ['Cricket', 'Hiking', 'Traveling', 'Not Reading'],
}, {
  name : 'JS Badhon',
  profilePicPath : 'assets/badhon.jpg',
  age : 32,
  bio : 'I do not like Angular',
  birthday : 'April 12',
  interests : ['Cricket', 'Hiking', 'Traveling', 'Reading'],
}]
