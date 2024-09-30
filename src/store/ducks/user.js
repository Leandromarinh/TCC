import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

//Types & Action creators. Aqui cria-se uma action para se comunicar com o que o saga deve fazer

const { Types, Creators } = createActions({
  getUserRequest: [""],
  getUserSuccess: ["user"],
  getUserFailure: ["error"],

  updateUserRequest: ["name", "email", "period"],
  updateUserSuccess: [""],
  updateUserFailure: ["error"],

  updatePasswordRequest: ["currentPassword", "newPassword"],
  updatePasswordSuccess: [""],
  updatePasswordFailure: ["error"],
});

export const UserTypes = Types;
export default Creators;

// Initial State

const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  user: null,
});

// Reducers

//Get
const getUserRequest = (state) => state.merge({ error: null });
const getUserSuccess = (state, { user }) => state.merge({ user, error: null });
const getUserFailure = (state, { error }) => state.merge({ error });

// Update
const updateUserRequest = (state) =>
  state.merge({ loading: true, error: null });
const updateUserSuccess = (state) =>
  state.merge({
    loading: false,
    error: null,
  });
const updateUserFailure = (state, { error }) =>
  state.merge({
    error,
    loading: false,
  });

const updatePasswordRequest = (state) =>
  state.merge({ loading: true, error: null });
const updatePasswordSuccess = (state) =>
  state.merge({
    loading: false,
    error: false,
  });
const updatePasswordFailure = (state, { error }) =>
  state.merge({
    error,
    loading: false,
  });
/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USER_REQUEST]: getUserRequest,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
  [Types.UPDATE_USER_REQUEST]: updateUserRequest,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
  [Types.UPDATE_PASSWORD_REQUEST]: updatePasswordRequest,
  [Types.UPDATE_PASSWORD_SUCCESS]: updatePasswordSuccess,
  [Types.UPDATE_PASSWORD_FAILURE]: updatePasswordFailure,
});
