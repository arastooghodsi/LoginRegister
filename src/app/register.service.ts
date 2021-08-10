import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Form } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  flagLogin: boolean = false;

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getUsers() {
    return Promise.resolve(USERS);
  }

  addUser(user: User) {
    Promise.resolve(USERS).then((users: User[]) => users.push(user));
  }

  loginUser(usernameLogin: string, passwordLogin: string) {
    for(let i = 0; i < USERS.length; i++) {
      if((JSON.stringify(USERS[i].username) == usernameLogin) && (JSON.stringify(USERS[i].password) == passwordLogin)) {
        this.flagLogin = true;
      }
    }
    alert(this.flagLogin);
    return this.flagLogin;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


