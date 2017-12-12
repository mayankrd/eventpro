import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {UserService} from "../services/user.client.service";

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  events: any;
  successFlag: boolean;

  constructor(private sharedDataService: SharedDataService, private userService: UserService) { }

  ngOnInit() {

    this.events = this.sharedDataService.user.events; //


  }

  unRegister(event){

    var id = event._id;

    var events = this.sharedDataService.user.events;
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

    this.sharedDataService.user.events = newEvents;

    this.userService.updateUser(this.sharedDataService.user)
      .subscribe(
        (data) => {
          console.log(data);
          this.userService.findUserById(this.sharedDataService.user._id)
            .subscribe(
              (data) => {
                console.log('update user', data);
                this.sharedDataService.user = data;
                this.successFlag = true;
                this.events = this.sharedDataService.user.events;
              }
            );

          this.sharedDataService.user = data;
        }
      );

  }

}
