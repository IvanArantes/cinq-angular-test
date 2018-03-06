import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user-service.service';
import { User } from '../../../domains/user';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  private downloadJsonHref: SafeUrl;
  private users: User[];
  private searchFilter: String;
  private nrSelectedItems: number;

  constructor(private userService: UserService,
    private sanitizer: DomSanitizer) { 
    this.nrSelectedItems = 0;
  }

  ngOnInit() {
    this.userService.readJsonFile()
    .subscribe(resp => {
      this.users = resp as User[]
      this.generateDownloadJsonUri()});
    
  }

  public numberOfSelectedItems() {
    this.nrSelectedItems = this.users.filter(user => user.checked === true).length;
  }

  public deleteCheckedItems() {
    for (let item of this.users.filter(user => user.checked === true)) {
      let index = this.users.findIndex(x => x.id==item.id);
      this.users.splice(index, 1);
      this.nrSelectedItems = 0;
    }
  }

  public generateDownloadJsonUri() { 
   var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.users)));
   this.downloadJsonHref = uri;
}


}
