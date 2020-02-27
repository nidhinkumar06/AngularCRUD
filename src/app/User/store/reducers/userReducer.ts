import { UserState } from '../../user.model';
import { Actions, ActionTypes } from '../actions/userAction';

const initialState: UserState = {
  users: []
};
export function userReducer(state: UserState = initialState, action: Actions ) {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
    console.log('Fetch User Actions : ', action);
    return {
        ...state
      };
    case ActionTypes.ADD_USER:
      console.log('Add User Actions : ', action);
      return {
        users: [...state.users, ...action.payload]
      };
    default:
      return {
      ...state
    };

  }
}
