import { ActionTypes } from '../actions';
const initialState = {
  user: {}
};

export default (state = initialState, action) => {
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
