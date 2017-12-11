import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.client.service";
import {Router} from "@angular/router";
import {SharedDataService} from "../services/shared.data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedDataService) { }

  ngOnInit() {


  }

  register(){

    console.log('register');

    var user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }

    this.userService.register(user)
      .subscribe(
        (data) => {
          this.sharedService.user = data;
          this.sharedService.loggedIn = true;
          console.log(this.sharedService.user);
          this.router.navigate(['/profile'])
        }

      );

  }

}
