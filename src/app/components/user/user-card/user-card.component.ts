import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../domains/user';

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
  constructor() { }

  ngOnInit() {
  }

}
