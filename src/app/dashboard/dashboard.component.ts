import { Component, OnInit } from '@angular/core';
import {UserService} from "../users";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users;
  constructor(private us:UserService) {
    us.getUsers().subscribe((users)=>{
      this.users = users;
    })
  }

  ngOnInit() {
  }

}
