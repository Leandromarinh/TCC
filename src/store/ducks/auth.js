import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

//Types & Action creators. Aqui cria-se uma action para se comunicar com o que o saga deve fazer

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["user", "token", "refresh_token", "token_expiry_time"],
  signInFailure: ["error"],
  tokenRefreshed: ["token", "refresh_token", "token_expiry_time"],
  signOut: null,
  signUpRequest: ["name", "email", "password", "period"],
  signUpSuccess: null,
  signUpFailure: ["error"],
});

export const AuthTypes = Types;
export default Creators;

// Initial State

const INITIAL_STATE = Immutable({
  user: null,
  token: null,
  refresh_token: null,
  token_expiry_time: null,
  loading: false,
  signedIn: false,
  error: null,
});

// Reducers

//SigIn
const signInRequest = (state) => state.merge({ loading: true });
const signInSuccess = (
  state,
  { user, token, refresh_token, token_expiry_time }
) =>
  state.merge({
    loading: false,
    signedIn: true,
    user,
    token,
    refresh_token,
    token_expiry_time,
  });
const signInFailure = (state, { error }) =>
  state.merge({
    loading: false,
    error,
    signedIn: false,
    token: null,
    refresh_token: null,
    token_expiry_time: null,
  });
const tokenRefreshed = (state, { token, refresh_token, token_expiry_time }) =>
  state.merge({
    loading: false,
    signedIn: true,
    token,
    refresh_token,
    token_expiry_time,
  });

//SignOut
const signOut = (state) =>
  state.merge({
    signedIn: false,
    user: null,
    loading: false,
    token: null,
    refresh_token: null,
    token_expiry_time: null,
  });

//SignUp
const signUpRequest = (state) => state.merge({ loading: true, error: null });
const signUpSuccess = (state) =>
  state.merge({
    loading: false,
    error: null,
  });
const signUpFailure = (state, { error }) =>
  state.merge({
    error,
    loading: false,
  });

//Update

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: signInRequest,
  [Types.SIGN_IN_SUCCESS]: signInSuccess,
  [Types.SIGN_IN_FAILURE]: signInFailure,
  [Types.TOKEN_REFRESHED]: tokenRefreshed,
  [Types.SIGN_OUT]: signOut,
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure,
});
