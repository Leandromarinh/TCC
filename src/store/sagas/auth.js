import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../services/api";

import AuthActions, { AuthTypes } from "../ducks/auth";

export function* signIn({ email, password }) {
  // try {
  //     const { data } = yield call(api.post, `/login`, { email, password });
  //     console.log('data:', data);
  //     yield put(
  //       AuthActions.signInSuccess(
  //         email,
  //         data.token,
  //         data.refresh_token
  //       )
  //     );
  //     const { auth } = yield select();
  //     console.log('signedIn saga:', auth);
  //     api.defaults.headers.Authorization = `Bearer ${auth.token}`;
  //   } catch (err) {
  //     console.log('error');
  //     yield put(AuthActions.signInFailure(err.response?.data));
  //   }
  const name = "leandro";
  const token = password;
  const refresh_token = password + "123";
  yield put(AuthActions.signInSuccess(name, token, refresh_token));
}

export function* signUp({ email, password, period, name }) {
  yield put(AuthActions.signUpSuccess());
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
]);
