import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchKey: string;

  constructor() { }

  ngOnInit() {

  }

  searchEvents(){

    console.log(this.searchKey);

  }

}
