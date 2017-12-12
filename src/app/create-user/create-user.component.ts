import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.client.service";
import {SharedDataService} from "../services/shared.data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
  successFlag: boolean;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedDataService) { }

  ngOnInit() {
    this.successFlag = false;
  }

  register(){

    console.log('register');

    var user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      type: this.type
    };

    console.log(user);

    this.userService.register(user)
      .subscribe(
        (data) => {
          //this.sharedService.user = data;
          //this.sharedService.loggedIn = true;
          console.log(data);
          this.successFlag = true;
          //this.router.navigate(['/profile'])
        }

      );

  }

}
