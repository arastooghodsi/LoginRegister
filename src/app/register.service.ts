import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  getUsers(newUser: User) {

    let flag = true;
    for(let i = 0; i < USERS.length; i++) {
        if( 
          (JSON.stringify(newUser.email) === JSON.stringify(USERS[i]. email)) ||
          (JSON.stringify(newUser.username) === JSON.stringify(USERS[i]. username)) ||
          (JSON.stringify(newUser.phone) === JSON.stringify(USERS[i]. phone)))
          flag = false;
    }

    if(!flag) {
      console.log('duplicate data');
    }else {
      console.log(newUser);
    }

  }

}
