import { Action } from '@ngrx/store';

export enum ActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  ADD_USER = 'ADD_USER'
}

export class FetchUsers implements Action {
  readonly type = ActionTypes.FETCH_USERS;
}

export class AddUser implements Action {
  readonly type = ActionTypes.ADD_USER;
  constructor(public payload: any) {}
}

export type Actions= FetchUsers | AddUser;
