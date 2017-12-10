import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent implements OnInit {

  constructor(public sharedeDataService: SharedDataService, private router: Router) { }

  ngOnInit() {
    if(this.sharedeDataService.eventdetail == undefined){
      this.router.navigate(['/']);
    }
  }

}
