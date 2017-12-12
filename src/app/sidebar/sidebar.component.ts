import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAdmin: boolean;
  isOrganizer: boolean;

  constructor(public sharedDataService: SharedDataService) {
  }

  ngOnInit() {

    var type = this.sharedDataService.user.type;
    console.log(type);
    if (type == 'admin')
      this.isAdmin = true;
    else if (type == 'organizer')
      this.isOrganizer = true;
    else {
      this.isAdmin = false;
      this.isOrganizer = false;

    }

  }
}
