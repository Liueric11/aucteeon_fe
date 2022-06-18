import * as ActionTypes from '../constant';

export const increment = (count) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INCREMENT,
      counter: count
    });
  };
};
