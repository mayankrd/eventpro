import { Component, OnInit } from '@angular/core';
import {EventService} from "app/services/event.client.service";
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = [];

  constructor(private eventService: EventService, public sharedDataService: SharedDataService) { }

  ngOnInit() {

  }

  showEventDetails(event){
    console.log(event);
  }
}
