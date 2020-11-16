import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }
  // API end-point URL
  private readonly URL: string = 'https://experienced-icy-canary.glitch.me';
  

  public getUsers(){
    return this.http.get<User[]>(`${this.URL}/users`);
  }
  public createUser(user: User){}
  public deleteUser(user: User){}

  public getNotesByUser(id: Number){
    return this.http.get(`${this.URL}/users/${id}/notes`);
  }
  public addNotesByUser(user: User){
    return this.http.post(`${this.URL}/users/`,user);
  }

  

}
