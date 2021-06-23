import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Form } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };


  // getUsers(newUser: User) {

  //   let flag = true;
  //   for(let i = 0; i < USERS.length; i++) {
  //       if( 
  //         (JSON.stringify(newUser.email) === JSON.stringify(USERS[i]. email)) ||
  //         (JSON.stringify(newUser.username) === JSON.stringify(USERS[i]. username)) ||
  //         (JSON.stringify(newUser.phone) === JSON.stringify(USERS[i]. phone)))
  //         flag = false;
  //   }

  //   if(!flag) {
  //     console.log('duplicate data');
  //   }else {
  //     console.log(newUser);
  //   }

  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched heroes'))
        // catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => console.log('ali'))
    );
    // for(let i = 0; i < USERS.length; i++) {
    //   console.log('{' + JSON.stringify(USERS[i].username) + '},\n{' + JSON.stringify(USERS[i].email) + '},\n{' + JSON.stringify(USERS[i].phone) + '}');
    // }
  }

}
