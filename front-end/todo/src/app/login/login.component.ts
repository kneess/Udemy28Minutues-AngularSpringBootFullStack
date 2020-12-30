import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/basic-authentication.service';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //DependencyInjection

  constructor(public router: Router,
              public harcodedAuthenticationService: HardcodedAuthenticationService,
              public basicAutenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    if(this.harcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleJWTAuthLogin() {
    this.basicAutenticationService.executeJWTAuthenticationService(this.username, this.password)
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate(['welcome', this.username]);
              this.invalidLogin = false;
            },
            error => {
              console.log(error);
              this.invalidLogin = true;
            }
          ) 
  }

  handleBasicAuthLogin() {
    // console.log(this.username);
    this.basicAutenticationService.executeAuthenticationService(this.username, this.password)
          .subscribe(
            data => {
              console.log(data);
              this.router.navigate(['welcome', this.username]);
              this.invalidLogin = false;
            },
            error => {
              console.log(error);
              this.invalidLogin = true;
            }
          ) 
  }

}
