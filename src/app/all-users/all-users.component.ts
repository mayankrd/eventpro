import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.client.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.findAllUsers()
      .subscribe(
        (data) => {

          this.users = data;

        }
      );
  }


  deleteUser(id){

    this.userService.deleteUser(id)
      .subscribe(
        (data) => {
          console.log(data);
          this.userService.findAllUsers()
            .subscribe(
              (data) => {

                this.users = data;

              }
            );
        }
      );

  }

}
