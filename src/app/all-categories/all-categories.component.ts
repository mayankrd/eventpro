import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.client.service";

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  cats = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {

    this.eventService.findAllCategories()
      .subscribe(
        (data) => {
          this.cats = data;
        }
      );
  }

  deleteCategory(id){

    this.eventService.deleteCategory(id)
      .subscribe(
        (data) => {
          console.log(data);
          this.eventService.findAllCategories()
            .subscribe(
              (data) => {
                this.cats = data;
              }
            );
        }
      );

  }

}
