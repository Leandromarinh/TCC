import { all, call, put, takeLatest, select } from "redux-saga/effects";

import api from "../../services/api";

import UserActions, { UserTypes } from "../ducks/user";

import { toast } from "react-toastify";

export function* getUser() {
  const { user } = yield select((state) => state.auth);
  const id = user._id;
  try {
    const { data } = yield call(api.get, `/user/${id}`);
    console.log("data no saga:", data.user);
    yield put(UserActions.getUserSuccess(data.user));
  } catch (err) {
    yield put(UserActions.getUserFailure(err.response?.data.msg));
    toast.error(`${err.response?.data.msg}`);
  }
}

export function* updateUser({ name, email, period }) {
  const { user } = yield select((state) => state.auth);
  try {
    const { data } = yield call(api.put, `/user/update/${user._id}`, {
      name,
      email,
      period,
    });
    yield put(UserActions.updateUserSuccess());
    toast.success("Informações pessoais editadas com sucesso!");
  } catch (err) {
    yield put(UserActions.updateUserFailure(err.response?.data.message));
    toast.error(`${err.response?.data.message}`);
  }
}

export function* updatePassword({ currentPassword, newPassword }) {
  const { user } = yield select((state) => state.auth);
  try {
    const { data } = yield call(api.put, `/user/update/${user._id}/password`, {
      currentPassword,
      newPassword,
    });
    yield put(UserActions.updatePasswordSuccess());
    toast.success("Senha editada com sucesso!");
  } catch (err) {
    yield put(UserActions.updatePasswordFailure(err.response?.data.message));
    toast.error(`${err.response?.data.message}`);
  }
}

export default all([
  takeLatest(UserTypes.GET_USER_REQUEST, getUser),
  takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
  takeLatest(UserTypes.UPDATE_PASSWORD_REQUEST, updatePassword),
]);
