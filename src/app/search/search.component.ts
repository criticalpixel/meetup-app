import { Component, OnInit } from '@angular/core';
import {UserService} from "../users";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[UserService]
})
export class SearchComponent implements OnInit {
  users;
  constructor(public us:UserService) {
    us.getUsers().subscribe(users=>{
      this.users = users;
    })
  }

  ngOnInit() {
  }

}
