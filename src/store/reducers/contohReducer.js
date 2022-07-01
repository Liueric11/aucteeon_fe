import { ActionTypes } from '../actions';
const initialState = {
  counter: 10
};

// eslint-disable-next-line import/no-anonymous-default-export
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
