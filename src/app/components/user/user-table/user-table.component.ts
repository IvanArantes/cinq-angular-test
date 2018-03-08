import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../domains/user';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input() users: User[];
  @Input() searchFilter: String;
  @Output() changedNrUsers = new EventEmitter<boolean>();
  nrSelectedUsers: number;
  
  constructor(private userService: UserService) {
    this.nrSelectedUsers = 0;
  }

  ngOnInit() {
  }
  
  public numberOfSelectedItems() {
    this.nrSelectedUsers = this.users.filter(user => user.checked === true).length;
    this.changedNrUsers.emit(true);
  }

  public deleteItem(id: number) {
    this.userService.deleteUser(id, this.users);
  }

  public deleteCheckedItems() {
    this.userService.deleteCheckedUsers(this.users);
    this.nrSelectedUsers = 0;
  }
  
}
