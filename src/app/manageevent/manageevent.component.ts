import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-manageevent',
  templateUrl: './manageevent.component.html',
  styleUrls: ['./manageevent.component.css']
})
export class ManageeventComponent implements OnInit {

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    console.log("at manage events");
    this.sharedDataService.manageCategoriesVisible = true;
    console.log(this.sharedDataService.manageEventsVisible);
  }

}
