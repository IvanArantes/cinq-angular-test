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
  @Output() detectedChanges = new EventEmitter<boolean>();
  nrSelectedUsers: number;
  
  constructor(private userService: UserService) {

    this.nrSelectedUsers = 0;
  }

  ngOnInit() {
    this.userService.readJsonFile()
    .subscribe(resp => {
      this.users = resp as User[]});
  }
  
  public numberOfSelectedItems() {
    this.nrSelectedUsers = this.users.filter(user => user.checked === true).length;
    this.changedNrUsers.emit(true);
  }

  public deleteItem(id: number) {
    this.users = this.userService.deleteUser(id, this.users);
    this.detectedChanges.emit(true);
  }

  public deleteCheckedItems() {
    this.users = this.userService.deleteCheckedUsers(this.users);
    this.nrSelectedUsers = 0;
    this.detectedChanges.emit(true);
  }
  
}
