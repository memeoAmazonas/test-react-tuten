import { put, call, takeLatest } from 'redux-saga/effects';
import { SET_INFO_COUNTRY, SET_INFO_COUNTRY_ERROR, SET_INFO_COUNTRY_SUCCESS } from '../types';
import apiCall from '../api/apiCall';
import { LOCATION } from '../api/url';

export function* setInfoCountry() {
  try {
    const payload = yield call(apiCall, LOCATION, 'GET');
    yield put({
      type: SET_INFO_COUNTRY_SUCCESS,
      payload: payload.data,
    });
  } catch (e) {
    yield put({ type: SET_INFO_COUNTRY_ERROR });
  }
}

export function* getInfoCountry() {
  yield takeLatest(SET_INFO_COUNTRY, setInfoCountry);
}
