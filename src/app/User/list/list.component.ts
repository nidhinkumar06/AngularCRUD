import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
peoples = [];

  constructor(private router: Router, private store: Store<any>) {
     this.store.pipe(select('users')).subscribe(
      value => {
        console.log('value is : ',value);
        this.peoples=value.users;
      }
    );
   }

  ngOnInit() {
    // this.peoples.push({
    //   name : 'Smrithi',
    //   age : '21',
    //   gender : 'Female',
    //   mobile : '1234567890',
    //   location : 'cbe'
    // });
  }

  goToAddForm() {
    this.router.navigate(['/add']);
  }

  hasUser() {
    return this.peoples.length > 0 ;
  }
}
