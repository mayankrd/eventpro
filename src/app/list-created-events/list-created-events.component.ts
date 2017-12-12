import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";
import {SharedDataService} from "../services/shared.data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-created-events',
  templateUrl: './list-created-events.component.html',
  styleUrls: ['./list-created-events.component.css']
})
export class ListCreatedEventsComponent implements OnInit {

  constructor(private router: Router, private eventService: EventService, public sharedDataSrevice: SharedDataService) { }

  ngOnInit() {

    console.log('list events', this.sharedDataSrevice.user._id);

  }

  manageEvent(id){
    var url = 'manage/event/' + id;
    this.router.navigate([url]);
  }

}
