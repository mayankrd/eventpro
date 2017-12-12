import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {ActivatedRoute, Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import {EventService} from "../services/event.client.service";
import {UserService} from "../services/user.client.service";

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  eventId: string;
  event: any;
  comment: string;
  user: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private eventService: EventService, public sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit() {

    this.user = this.sharedDataService.user;

    this.activatedRoute.params.subscribe(params => {
      this.eventId = params['eventId'];
    });

    console.log(this.eventId);

    // if its an event brite event then display those details else find event by id

    if(this.eventId == 'eventbrite'){
      this.event = this.sharedDataService.eventdetail;
      console.log(this.event);
    }
    else{
      this.eventService.findEventById(this.eventId)
        .subscribe(
          (data) => {
            this.event = data;
          }
        );
    }


  }

  registerEvent(){

    this.sharedDataService.user.events.push(this.event);
    console.log(this.sharedDataService.user);
    this.userService.updateUser(this.sharedDataService.user)
      .subscribe(
        (data) => {
          console.log(data);
          this.userService.findUserById(this.sharedDataService.user._id)
            .subscribe(
              (data) => {
                console.log('update user', data);
                this.sharedDataService.user = data;
                this.router.navigate(['/myevents']);
              }
            );

          this.sharedDataService.user = data;
        }
      );

  }

  addComment(){

    console.log(this.comment);

    var wholeComment = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      descriptionText : this.comment
    };

    this.event.comments.push(wholeComment);
    this.eventService.updateEvent(this.event)
      .subscribe(
        (data) => {
          console.log(data);
          this.eventService.findEventById(this.eventId)
            .subscribe(
              (data) => {
                this.event = data;
              }
            );
        }
      );

  }

}
