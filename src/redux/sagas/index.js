import { all } from 'redux-saga/effects';
import { getInfoCountry } from './localization';
import { getLoginInfo } from './user';

export default function* rootSaga() {
  yield all([
    getInfoCountry(),
    getLoginInfo(),
  ]);
}
