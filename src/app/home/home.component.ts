import { Component, OnInit } from '@angular/core';
import {EventService} from "app/services/event.client.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {

      this.eventService.searchEvents("Cricket")
        .subscribe(
          (data) => {
              this.events = data.events,
              console.log(this.events)
          }
        );

  }

}
