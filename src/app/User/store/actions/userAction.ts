import { Action } from '@ngrx/store';

export enum ActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  ADD_USER = 'ADD_USER',
  EDIT_USER = 'EDIT_USER',
  DELETE_USER = 'DELETE_USER'
}

export class FetchUsers implements Action {
  readonly type = ActionTypes.FETCH_USERS;
}

export class AddUser implements Action {
  readonly type = ActionTypes.ADD_USER;
  constructor(public payload: any) {}
}

export class EditUser implements Action {
  readonly  type = ActionTypes.EDIT_USER;
  constructor(public payload: any) {}
}

export class DeleteUser implements Action {
  readonly  type = ActionTypes.DELETE_USER;
  constructor(public payload: number) {}
}

export type Actions= FetchUsers | AddUser | EditUser | DeleteUser ;
