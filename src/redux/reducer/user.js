import { GET_LOGIN, GET_LOGIN_ERROR, GET_LOGIN_SUCCESS } from '../types';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_LOGIN:
      return { ...state, loginLoading: true };
    case GET_LOGIN_SUCCESS:
      return { ...state, loginLoading: false, token: payload };
    case GET_LOGIN_ERROR:
      return { ...state, loginLoading: false, error: 'A ocurrido un error' };
    default:
      return { ...state };
  }
};
