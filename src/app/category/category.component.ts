import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catname: string;
  catdesc: string;
  successFlag = false;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.successFlag = false;
  }

  createCategory(){

    var category = {
      categoryname: this.catname,
      description: this.catdesc
    }

    this.eventService.createCategory(category)
      .subscribe(
        (data) => {
          console.log(data);
          this.successFlag = true;
        },
      (error) => {
        console.log(error);
        this.successFlag = false;
       }
      );
  }

}
