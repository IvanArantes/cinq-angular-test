import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../domains/user';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() users: User[];
  @Input() searchFilter: String;
  @Output() changedNrUsers = new EventEmitter<boolean>();
  @Output() detectedChanges = new EventEmitter<boolean>();
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
