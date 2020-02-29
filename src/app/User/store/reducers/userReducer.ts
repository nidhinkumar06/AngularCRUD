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
    case ActionTypes.EDIT_USER:
      console.log('Edit User Actions : ', action);
      //state.users.forEach((user) => {
        //console.log('for each user ' , user);
        //if (user.id === action.payload.id)
        //{
          //user = action.payload ;
          //console.log('data passed' , user);
        //}
      //})
      const updatedData = state.users.map((user) => {
        if (user.id === action.payload.id)
        {
          return {...user, ...action.payload};
        }
        else
        {
          return user;
        }

      } )
      return {
        ...state, 
        users: updatedData 
      };
      case ActionTypes.DELETE_USER:
        const delData = state.users.filter((user) => {
        if (user.id !== action.payload)
        {
          return user;
        }
        });
        console.log('delData', delData);
        return {
          ...state,
          users: delData
        };
    default:
      return {
      ...state
    };

  }
}
