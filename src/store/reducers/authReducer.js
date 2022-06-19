import { ActionTypes } from '../actions';
const initialState = {
  user: {}
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default AuthReducer;
