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

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

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
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(_ => console.log('fetched heroes'))
      // catchError(this.handleError<User[]>('getUsers', []))
    );
    
  }

  // addUser(user: User): Observable<User> {
  //   // console.log('fff');
  //   console.log(user.email.length);
  //   return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  //   //   return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
  //   //   tap((newUser: User) => console.log('mohsen')),
  //   //   catchError(this.handleError<User>('addUser'))
  //   // );
  // }


  addUser(name: String) {
    console.log("arast");
    console.log(name);
    return this.http.post<User>(this.usersUrl, name, this.httpOptions);
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
