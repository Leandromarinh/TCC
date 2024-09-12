import { all, call, put, takeLatest, delay, select } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist";

import api from "../../services/api";

import AuthActions, { AuthTypes } from "../ducks/auth";

import { toast } from "react-toastify";

export function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, `/auth/login`, { email, password });
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    yield put(
      AuthActions.signInSuccess(
        data.user,
        data.token,
        data.refresh_token,
        data.token_expiry_time
      )
    );
    yield setToken();
  } catch (err) {
    yield put(AuthActions.signInFailure(err.response?.data.msg));
    toast.error(`${err.response?.data.msg}`);
  }
}

export function* signUp({ email, password, period, name }) {
  try {
    const { data } = yield call(api.post, `/auth/register`, {
      name,
      email,
      password,
      period,
    });
    yield put(AuthActions.signUpSuccess());
  } catch (err) {
    yield put(AuthActions.signUpFailure(err.response?.data.msg));
  }
}

export function* updateUser({}) {}

export function* updatePassword({}) {}

function* setToken() {
  while (true) {
    const { token_expiry_time, refresh_token } = yield select(
      (state) => state.auth
    );

    if (token_expiry_time) {
      const currentTime = Math.floor(Date.now() / 1000); // Pega o tempo atual em segundos
      const timeUntilExpiration = token_expiry_time - currentTime;

      if (timeUntilExpiration <= 5400 && refresh_token) {
        try {
          const { data } = yield call(api.post, `/auth/refresh-token`, {
            refresh_token,
          });

          // Atualiza o token e o tempo de expiração
          yield put(
            AuthActions.tokenRefreshed(
              data.token,
              data.refresh_token,
              data.token_expiry_time
            )
          );
          console.log("token", data.token, "refresh_token:", refresh_token);

          // Atualiza o header de autorização com o novo token
          api.defaults.headers.Authorization = `Bearer ${data.token}`;
        } catch (error) {
          // Em caso de falha, desloga o usuário
          yield put(AuthActions.signOut());
        }
      }
    }

    yield delay(3600000); // Verificar a cada 1 hora
    // yield delay(30000);
  }
}

function* rehydrateSetToken() {
  const { token, refresh_token } = yield select((state) => state.auth);

  if (token && refresh_token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // Inicia o monitoramento de expiração do token
    yield setToken();
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  takeLatest(AuthTypes.SIGN_IN_SUCCESS, setToken),
  takeLatest(REHYDRATE, rehydrateSetToken),
]);
