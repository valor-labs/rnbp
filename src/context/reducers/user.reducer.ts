import { UPDATE_USER } from '../actions/user.actions';

export function userReducer(state: any, action: any) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
