import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {

    console.log(this.sharedDataService.manageEventsVisible);

  }

}
