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

  //GET USERS. As this is a file not database, i am returning the same edited array.
  public readJsonFile(): Observable<any> {
    if(this.users.length == 0) {
      return this.http.get("./assets/users.json")
                    .map(response => response as User[])
                    .catch(err => {throw err});
    } else {
      return Observable.of(this.users).map(response => response as User[]);
    }
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
    for (let user of users.filter(user => user.checked === true)) {
      let index = users.findIndex(user => user.id === user.id);
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
  public saveUser(user: User, users: User[]) {
    //this.http.post('backendurl/users', user);
      let index = users.findIndex(user => user.id === user.id);
      users[index] = user;
      this.users = users;
  }
}
