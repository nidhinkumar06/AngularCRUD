import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as UserActions from '../store/actions/userAction';
import {User} from '../user.model';
import {ActivatedRoute} from '@angular/router';
import {Store, select} from '@ngrx/store';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  locations = [
    {
        id: '1',
        name: 'Mumbai',
        state: 'Maharashtra'
    },
    {
        id: '2',
        name: 'Delhi',
        state: 'Delhi'
    },
    {
        id: '3',
        name: 'Bengaluru',
        state: 'Karnataka'
    },
    {
        id: '4',
        name: 'Ahmedabad',
        state: 'Gujarat'
    },
    {
        id: '5',
        name: 'Hyderabad',
        state: 'Telangana'
    },
    {
        id: '6',
        name: 'Chennai',
        state: 'Tamil Nadu'
    },
    {
        id: '7',
        name: 'Kolkata',
        state: 'West Bengal'
    },
    {
        id: '8',
        name: 'Pune',
        state: 'Maharashtra'
    },
    {
        id: '9',
        name: 'Jaipur',
        state: 'Rajasthan'
    },
    {
        id: '10',
        name: 'Surat',
        state: 'Gujarat'
    },
    {
        id: '11',
        name: 'Lucknow',
        state: 'Uttar Pradesh'
    },
    {
        id: '12',
        name: 'Kanpur',
        state: 'Uttar Pradesh'
    },
    {
        id: '13',
        name: 'Nagpur',
        state: 'Maharashtra'
    },
    {
        id: '14',
        name: 'Patna',
        state: 'Bihar'
    },
    {
        id: '15',
        name: 'Indore',
        state: 'Madhya Pradesh'
    },
    {
        id: '16',
        name: 'Thane',
        state: 'Maharashtra'
    },
    {
        id: '17',
        name: 'Bhopal',
        state: 'Madhya Pradesh'
    },
    {
        id: '18',
        name: 'Visakhapatnam',
        state: 'Andhra Pradesh'
    },
    {
        id: '19',
        name: 'Vadodara',
        state: 'Gujarat'
    },
    {
        id: '20',
        name: 'Firozabad',
        state: 'Uttar Pradesh'
    }
];

  userForm = this.formBuilder.group({
    name : ['', [Validators.required]],
    age : [''],
    gender : ['', [Validators.required]],
    mobile : ['', [Validators.required]],
    location : ['']
  });
  id : number;
  filteredUser : User;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<any>, private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    // the user inside the select is the stores key
    this.store.pipe(select('users')).subscribe( 
      value => {
        const storeUsers = value.users;
        // when number is passed as params from store it is passed as string
        //so u shd convert using Number()
        this.filteredUser = storeUsers.find((storeUser) => storeUser.id === Number(this.id) )
        this.userForm.patchValue({
          name : this.filteredUser.name ,
          age : this.filteredUser.age,
          gender : this.filteredUser.gender,
          mobile : this.filteredUser.mobile,
          location : this.filteredUser.location 
        })
      }
    );
    console.log('fil user = ', this.filteredUser);
  }
  get name() {
    return this.userForm.get('name');
  }
  get mobile() {
    return this.userForm.get('mobile');
  }
  get gender() {
    return this.userForm.get('gender');
  }
  onSave() {
    console.log('values', this.userForm.value );
    const userValue: User = {
      id : Number(this.id),
      ... this.userForm.value
    };
    console.log(userValue);
    this.store.dispatch(new UserActions.EditUser(userValue));
    this.userForm.reset();
    this.onBack();
  }
  onBack() {
    this.router.navigate(['/list']);
  }
}