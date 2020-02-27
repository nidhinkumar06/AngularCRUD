import { UserState } from '../../user.model';
import { Actions, ActionTypes } from '../actions/userAction';

const initialState: UserState = {
  users: []
};
export function userReducer(state: UserState = initialState, action: Actions ) {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return {
        ...state
      };
    case ActionTypes.ADD_USER:
      return {
        ...state,
        users: [...action.payload]
      };
    default:
      return {
      ...state
    };

  }
}
