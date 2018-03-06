import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user-service.service';
import { User } from '../../../domains/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  private users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.readJsonFile()
    .subscribe(resp => this.users = resp as User[]);
  }

}
