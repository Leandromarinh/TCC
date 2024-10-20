import { all } from "redux-saga/effects";

//import dos sagas
import Auth from "./auth";
import User from "./user";

export default function* rootSaga() {
  yield all([Auth, User]);
}
