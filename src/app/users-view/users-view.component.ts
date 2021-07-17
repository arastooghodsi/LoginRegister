import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  users: User[] = [];

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.registerService.getUsers().then((users: User[]) => this.users = users);
  }

}
