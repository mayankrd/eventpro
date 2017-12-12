import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {ActivatedRoute, Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import {EventService} from "../services/event.client.service";

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  eventId: string;
  event = {};

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, public sharedeDataService: SharedDataService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['eventId'];
    });

    this.eventService.findEventById(this.eventId)
      .subscribe(
        (data) => {
            this.event = data;
        }
      );
  }

}
