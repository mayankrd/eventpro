import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-local-events',
  templateUrl: './local-events.component.html',
  styleUrls: ['./local-events.component.css']
})
export class LocalEventsComponent implements OnInit {

  events = [];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {

    this.eventService.findAllEvents()
      .subscribe(
        (data) => {
          console.log(data);
          this.events = data;
        }
      );
  }

  showEventDetails(event){
    var url = 'events/' + event._id;
    this.router.navigate([url]);
  }

}
