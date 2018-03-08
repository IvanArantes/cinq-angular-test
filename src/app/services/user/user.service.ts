import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { User } from '../../domains/user';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable()
export class UserService {
  private users: User[] = new Array<User>();

//HttpClient will be used for HTTP request later.
  constructor(private http: HttpClient, 
    private sanitizer: DomSanitizer) { }

  //GET USERS
  public readJsonFile(): Observable<any> {
    return this.http.get("./assets/users.json")
                    .map(response => response as User[])
                    .catch(err => {throw err});

  }

  //GET USER BY ID
  public getUser(id: number | string): Observable<any> {
    //this.http.get('backendUrl', id);
    return this.readJsonFile().map(users => users.find(user => user.id === +id));
  }

  public generateDownloadJsonUri(object: any) {
    return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(object)));
  }

  public deleteCheckedUsers(users: User[]) {
    for (let item of users.filter(user => user.checked === true)) {
      let index = users.findIndex(x => x.id==item.id);
      users.splice(index, 1);
    }
  }
  
  //Delete User
  public deleteUser(id: number, users: User[]) {
    //this.http.delete('backendUrl/users', user);
    let index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
  }

  //Save user
  public saveUser(user: User) {
    //this.http.post('backendurl/users', user);
    this.readJsonFile().subscribe(resp => {this.users = resp as User[]});
    let index = this.users.findIndex(user => user.id === user.id);
    this.users[index] = user;

  }
}
