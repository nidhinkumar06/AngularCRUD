import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
users = [];

  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit() {
    // this.users.push({
    //   name : 'Smrithi',
    //   age : '21',
    //   gender : 'Female',
    //   mobile : '1234567890',
    //   location : 'cbe'
    // });
    this.store.pipe(select('user')).subscribe(
      value => {
        console.log('value is : ',value);
        this.users=value.users;
      }
    );
  }

  goToAddForm() {
    this.router.navigate(['/add']);
  }

  hasUser() {
    return this.users.length > 0 ;
  }
}
