import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { User } from './user';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // API end-point URL
  private readonly URL: string = 'https://experienced-icy-canary.glitch.me';
  

  public getUsers(): Observable<any> {
    return this.http.get<User[]>(`${this.URL}/users`).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
}

 /* public getUsers(){
    return Observable.create(o => {
      o.next( this.http.get<User[]>(`${this.URL}/users`) );
    });
  }
  */

  public createUser(user: User){}
  public deleteUser(user: User){}

  public getNotesByUser(id: Number){
    return this.http.get(`${this.URL}/users/${id}/notes`);
  }
  public addNotesByUser(user: User){
    return this.http.post(`${this.URL}/users/`,user);
  }

  private handleError(err: HttpErrorResponse) {
 
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

        errorMessage = `An error occurred: ${err.error.message}`;
    } else {

        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

}
