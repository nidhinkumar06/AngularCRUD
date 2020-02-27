import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
users = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // this.users.push({
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
    return this.users.length > 0 ;
  }
}
