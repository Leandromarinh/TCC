import { all } from 'redux-saga/effects';

//import dos sagas
import Auth from './auth';

export default function* rootSaga() {
  yield all([Auth]);
}