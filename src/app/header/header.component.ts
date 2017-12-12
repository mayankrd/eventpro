import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {Router} from "@angular/router";
import {EventService} from "../services/event.client.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchKey: string;
  isAdmin: boolean;
  isOrganizer: boolean;

  constructor(private eventService: EventService, public sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit() {

      var type = this.sharedDataService.user.type;
      if(type == 'admin')
        this.isAdmin = true;
      else if(type == 'organiser')
        this.isOrganizer = true;
      else{
        this.isAdmin = false;
        this.isOrganizer = false;
      }

  }

  searchEvents(){

    this.eventService.searchEvents(this.searchKey)
      .subscribe(
        (data) => {
          this.sharedDataService.events = data.events,

            console.log(this.sharedDataService.events);
        }
      );

    this.router.navigate(['']);
  }

  logout(){
    this.sharedDataService.user = '';
    this.sharedDataService.loggedIn = false;
    this.router.navigate(['']);
  }
}
