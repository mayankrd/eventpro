import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";
import {SharedDataService} from "../services/shared.data.service";
import {Router} from "@angular/router";
import {UserService} from "../services/user.client.service";

@Component({
  selector: 'app-list-created-events',
  templateUrl: './list-created-events.component.html',
  styleUrls: ['./list-created-events.component.css']
})
export class ListCreatedEventsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private eventService: EventService, public sharedDataSrevice: SharedDataService) { }

  ngOnInit() {

    console.log('list events', this.sharedDataSrevice.user._id);

  }

  manageEvent(id){
    this.eventService.deleteEvent(id)
      .subscribe(
        (data) =>
        {
          console.log(data);
          this.deleteEventFromUser(id);
        }
      );
  }

  deleteEventFromUser(id){

    var events = this.sharedDataSrevice.user.createdEvents;
    var newEvents = [];

    for(var i=0; i<events.length; i++){
        console.log(events[0]._id);
        if(events[i]._id == id){
          console.log(events[i]._id);
        }
        else{
          newEvents.push(events[i]);
        }
    }

    this.sharedDataSrevice.user.createdEvents = newEvents;

    this.userService.updateUser(this.sharedDataSrevice.user)
      .subscribe(
        (data) => {
          console.log(data);
          this.userService.findUserById(this.sharedDataSrevice.user._id)
            .subscribe(
              (data) => {
                console.log('update user', data);
                this.sharedDataSrevice.user = data;
              }
            );

          this.sharedDataSrevice.user = data;
        }
      );

  }

}
