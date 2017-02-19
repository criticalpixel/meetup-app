import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent{
  title = 'ngDublin';
  constructor(public route:Router, public us:UserService){
  }

  login(){
    this.us.af.auth.login()
        .then(()=>{
          this.route.navigate(['search']);
        })
  }

  logout(){
    this.us.af.auth.logout()
        .then(()=>{
          this.route.navigate(['home']);
        })
  }

}
