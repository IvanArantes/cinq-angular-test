import { Component, OnInit, HostListener } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { User } from '../../../domains/user';
import { SafeUrl } from '@angular/platform-browser';
import { UserService } from '../../../services/user/user.service';
import { ExportToCSV } from '@molteni/export-csv';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-host',
  templateUrl: './user-host.component.html',
  styleUrls: ['./user-host.component.css']
})
export class UserHostComponent implements OnInit, AfterViewInit {
  private downloadJsonHref: SafeUrl;
  private users: User[];
  private searchFilter: String;
  private nrSelectedItems: number;
  public deviceWidth: any;

  @ViewChild(UserTableComponent)
  private userTableComponent: UserTableComponent;

  @ViewChild(UserCardComponent)
  private userCardComponent: UserCardComponent;

  constructor(private userService: UserService) { 
    this.nrSelectedItems = 0;
  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.userService.readJsonFile()
      .subscribe(resp => {
        this.users = resp as User[]
        this.generateDownloadJsonUri()
      });

    this.deviceWidth = window.innerWidth;
  }

  public getNumberOfSelectedUsers() {
    if(this.userCardComponent != null) {
      this.nrSelectedItems = this.userCardComponent.nrSelectedUsers;
    }
    if(this.userTableComponent != null) {
      this.nrSelectedItems = this.userTableComponent.nrSelectedUsers;
    }
    console.log(this.nrSelectedItems);
  }

  public generateDownloadJsonUri() {
    this.downloadJsonHref = this.userService.generateDownloadJsonUri(this.users);
  }

  public generateDownloadCSV() {
    let exporter = new ExportToCSV();
    exporter.exportAllToCSV(this.users, "users.csv");
  }

  public deleteCheckedItems() {
    this.userService.deleteCheckedUsers(this.users);
    this.nrSelectedItems = 0;
    this.generateDownloadJsonUri();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.deviceWidth = window.innerWidth;
  }
}
