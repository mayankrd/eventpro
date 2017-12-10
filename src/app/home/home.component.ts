import { Component, OnInit } from '@angular/core';
import {EventService} from "app/services/event.client.service";
import {SharedDataService} from "../services/shared.data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = [];

  constructor(private router: Router, private eventService: EventService, public sharedDataService: SharedDataService) { }

  ngOnInit() {
    if(this.sharedDataService.eventdetail == ""){
      this.eventService.searchEvents("")
        .subscribe(
          (data) => {
            this.sharedDataService.events = data.events,

              console.log(this.sharedDataService.events);
          }
        );
    }
  }

  showEventDetails(event){
    this.sharedDataService.eventdetail = event;
    this.router.navigate(['/eventdetail']);
  }
}
