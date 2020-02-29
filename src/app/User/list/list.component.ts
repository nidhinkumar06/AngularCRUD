import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store, select} from '@ngrx/store';
import * as UserActions from '../store/actions/userAction';

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

  editClick (id:number) {
    this.router.navigate(['/edit', id]);
  }

  deleteClick (id:number) {
    if(window.confirm("Do you want to delete user ? "))
    {
      this.store.dispatch(new UserActions.DeleteUser(id));
    }
    else
    {
      console.log('pressed cancel');
    }
  }
}
