import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../services/event.client.service";

@Component({
  selector: 'app-manageevent',
  templateUrl: './manageevent.component.html',
  styleUrls: ['./manageevent.component.css']
})
export class ManageeventComponent implements OnInit {

  successFlag = false;
  eventName: string;
  eventDesc: string;
  street1: string;
  street2: string;
  country: string;
  state: string;
  zip: string;
  eventCont: string;
  categories = [];
  cat = {};
  eventId: string;

  constructor(private eventService: EventService, private sharedDataService: SharedDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['eventId'];
    });

    this.eventService.findEventById(this.eventId)
      .subscribe(
        (data) => {
          console.log(data);
          this.eventName = data.eventName;
          this.eventDesc = data.eventDesc;
          this.street1 = data.street1;
          this.street2 = data.street2;
          this.country = data.country;
          this.state = data.state;
          this.zip = data.zip;
          this.eventCont = data.eventCont;
        }
      );
  }

  updateEvent(){

  }

  deleteEvent(){

  }

}
