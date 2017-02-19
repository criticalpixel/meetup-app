import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../users";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  constructor(private us: UserService,
              private route:ActivatedRoute,
              public snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.us.getUser(+params['id']))
        .subscribe(user => this.user = user);
  }

  updateAttendance(value){
    this.us.updateUser(this.user.id, {
      attending: value.checked
    })
  }

  submitFeedback(workshop, feedback){
    this.us.updateUser(this.user.id, {
      workshop: workshop,
      message : feedback
    });
    this.snackBar.open('Thank You!', 'OK');
  }



}
