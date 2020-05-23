import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_LOGIN, GET_LOGIN_ERROR,
  GET_LOGIN_SUCCESS,
} from '../types';
import apiCall from '../api/apiCall';
import { APP_TUTEN, URL_TUTEN } from '../api/url';

export function* setInfoLogin({ payload }) {
  const { email, password } = payload;
  const url = `${URL_TUTEN}${email}`;
  const app = APP_TUTEN;
  try {
    const response = yield call(apiCall, url, 'PUT', null, {
      'Content-Type': 'application/json', Accept: 'application/json', app, password,
    });
    console.log(response);
    yield put({
      type: GET_LOGIN_SUCCESS,
      payload: response.data.sessionTokenBck,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: GET_LOGIN_ERROR });
  }
}

export function* getLoginInfo() {
  yield takeLatest(GET_LOGIN, setInfoLogin);
}
