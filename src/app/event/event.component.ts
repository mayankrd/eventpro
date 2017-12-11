import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  successFlag = false;
  eventName: string;
  eventDesc: string;
  street1: string;
  street2: string;
  country: string;
  state: string;
  zip: string;
  eventCont: string;

  constructor(private eventService: EventService) {}

  ngOnInit() {

    this.successFlag = false;
  }

  createEvent(){

    var event = {

      eventname: this.eventName,
      eventdescription: this.eventDesc,
      location: {
        street1: this.street1,
        street2: this.street2,
        zipcode: this.zip,
        country: this.country,
        state: this.state
      },
      contact: {
        phonenumber: this.eventCont
      }
    }

    this.eventService.createEvent(event)
      .subscribe(
        (data) => {
          this.successFlag = true;
          console.log(data);
        },
        (error) => {
          this.successFlag = false;
          console.log(error);
        }

      );


  }

}
