import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../services/shared.data.service";
import {UserService} from "../services/user.client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorFlag: boolean;

  constructor(private router: Router, private sharedService: SharedDataService, private userService: UserService) { }

  ngOnInit() {
    this.errorFlag = false;
  }

  login(){

    var credentials = {
      username: this.username,
      password: this.password
    }

    this.userService.login(credentials)
      .subscribe(
        (data) => {
          console.log(data);
          this.sharedService.user = data;
          this.sharedService.loggedIn = true;
          this.router.navigate(['/profile']);
        },
        (error) => this.errorFlag = true
      );


  }

}
