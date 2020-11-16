import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input()
  users = [];
  title: String = "oefening";

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getUsers().subscribe((res)=>{ 
      console.log(res);
      this.users= res;
    });
  }
}