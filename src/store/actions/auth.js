import * as ActionTypes from '../constant';

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.LOGIN,
      user: { name: 'eric', umur: 20 }
    });
  };
};
