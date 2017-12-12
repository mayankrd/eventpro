/**
 * Created by mayankrd on 12/7/17.
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';

// injecting service into module
@Injectable()

export class EventService {

  constructor(private _http: Http) { }

  baseUrl = 'https://www.eventbriteapi.com/v3/events/search/?token=PLTE6KPPWJJU7OK7RZRH&';
  baseUrlServer = 'http://localhost:3100';

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

  deleteEvent(event){

    this.options.withCredentials = true;

    const body = event;

    return this._http.delete(this.baseUrlServer + '/api/event/' + event._id, this.options)
      .map(
        (res: Response) => {
          const data = res;
          return data;
        }
      );

  }

  createEvent(event){

    this.options.withCredentials = true;

    const body = event;

    return this._http.post(this.baseUrlServer + '/api/event', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );

  }

  createCategory(category){

    this.options.withCredentials = true;

    const body = category;

    return this._http.post(this.baseUrlServer + '/api/category', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );

  }

  findAllCategories(){
    this.options.withCredentials = true;
    return this._http.get(this.baseUrlServer + '/api/category', this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );

  }

  findEventById(id){

    this.options.withCredentials = true;

    console.log(id);

    return this._http.get(this.baseUrlServer + '/api/event/' + id, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          console.log(data);
          return data;
        }
      );
  }

  findUserById(id){

    this.options.withCredentials = true;

    console.log(id);

    return this._http.get(this.baseUrlServer + '/api/user/' + id, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          console.log(data);
          return data;
        }
      );
  }


}
