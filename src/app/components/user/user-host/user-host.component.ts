import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { User } from '../../../domains/user';
import { SafeUrl } from '@angular/platform-browser';
import { UserService } from '../../../services/user/user.service';
import { ExportToCSV } from '@molteni/export-csv';

@Component({
  selector: 'app-user-host',
  templateUrl: './user-host.component.html',
  styleUrls: ['./user-host.component.css']
})
export class UserHostComponent implements OnInit, AfterViewInit  {
  private downloadJsonHref: SafeUrl;
  private users: User[];
  private searchFilter: String;
  private nrSelectedItems: number;

  @ViewChild(UserTableComponent)
  private userTableComponent: UserTableComponent;

  constructor(private userService: UserService) { }

  ngAfterViewInit(): void {
  } 

  ngOnInit() {
    this.userService.readJsonFile()
    .subscribe(resp => {
      this.users = resp as User[]
      this.generateDownloadJsonUri()});
  }

  public getNumberOfSelectedUsers() {
    this.nrSelectedItems = this.userTableComponent.nrSelectedUsers;
    console.log(this.nrSelectedItems);
  }

  public getUpdatedUsers() {
    this.users = this.userTableComponent.users;
    this.generateDownloadJsonUri();
  }

  public generateDownloadJsonUri() { 
    this.downloadJsonHref = this.userService.generateDownloadJsonUri(this.users);
   }

  public generateDownloadCSV() {
    let exporter = new ExportToCSV();
    exporter.exportAllToCSV(this.users, "users.csv");
  }

  public deleteCheckedItems() {
    this.users = this.userService.deleteCheckedUsers(this.users);
    this.nrSelectedItems = 0;
    this.generateDownloadJsonUri();
  }
}
