/**
 * Created by mayankrd on 12/10/17.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http) {}

  baseUrl = 'http://localhost:3100';

  options = new RequestOptions();

  register(user) {

    this.options.withCredentials = true;

    const body = {
      username : user.username,
      password : user.password,
      firstName : user.firstName,
      lastName : user.lastName,
      email : user.email
    };

    return this._http.post(this.baseUrl + '/api/user', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }
}
