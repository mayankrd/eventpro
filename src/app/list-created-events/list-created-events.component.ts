import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-list-created-events',
  templateUrl: './list-created-events.component.html',
  styleUrls: ['./list-created-events.component.css']
})
export class ListCreatedEventsComponent implements OnInit {

  constructor(private eventService: EventService, private sharedDataSrevice: SharedDataService) { }

  ngOnInit() {

    this.sharedDataSrevice.ge
  }

}
