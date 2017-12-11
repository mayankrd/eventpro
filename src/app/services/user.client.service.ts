/**
 * Created by mayankrd on 12/10/17.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {HttpParams} from "@angular/common/http";

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http) {}

  baseUrl = 'http://localhost:3100';

  options = new RequestOptions();

  login(credentials) {

    this.options.withCredentials = true;

    const body = {
      username : credentials.username,
      password : credentials.password
    };

    return this._http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  register(user) {

    this.options.withCredentials = true;

    const body = user;

    return this._http.post(this.baseUrl + '/api/user', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  updateUser(user) {

    console.log(JSON.stringify(user));

    var url = this.baseUrl + '/api/user/' + user._id;

    user = JSON.stringify(user);

    console.log(url);

    return this._http.put(url, user)
      .map(
        (res: Response) => {
          return 'Updated';
        }
      );

  }

}
