/**
 * Created by mayankrd on 12/7/17.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class EventService {

  constructor(private _http: Http) {
  }

  baseUrl = 'https://www.eventbriteapi.com/v3/events/search/?token=PLTE6KPPWJJU7OK7RZRH&';

  options = new RequestOptions();

  searchEvents(query) {
    this.options.withCredentials = true;
    return this._http.get(this.baseUrl + 'q=' + query)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );

  }
}
