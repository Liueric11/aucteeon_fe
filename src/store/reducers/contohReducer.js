import { ActionTypes } from '../actions';
const initialState = {
  counter: 10
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.counter
      };
    default:
      return state;
  }
};
