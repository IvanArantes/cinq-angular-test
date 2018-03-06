import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { User } from '../../domains/user';


@Injectable()
export class UserService {
//HttpClient will be used for HTTP request later.
  constructor(private http: HttpClient) { }

  public readJsonFile(): Observable<any> {
    return this.http.get("./assets/users.json")
                    .map(response => response as User[])
                    .catch(err => {throw err});

}

}
