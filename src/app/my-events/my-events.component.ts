import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  events: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {

    this.events = this.sharedDataService.user.events;
    console.log(this.events, this.sharedDataService.user.events);
    console.log(this.events, this.sharedDataService.user.events);

  }

  unRegister(event){

  }

}
