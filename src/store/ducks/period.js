import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

//Types & Action creators. Aqui cria-se uma action para se comunicar com o que o saga deve fazer

const { Types, Creators } = createActions({
  editPeriod: [
    "currentPeriod",
    "beginPeriod",
    "endPeriod",
    "beginLock",
    "endLock",
    "beginChange",
    "endChange",
    "pdfFile",
  ],
});

export const AuthTypes = Types;
export default Creators;

// Initial State

const INITIAL_STATE = Immutable({
  currentPeriod: "2024.2",
  beginPeriod: "12/08/2024",
  endPeriod: "14/12/2024",
  beginLock: "30/08/2024",
  endLock: "10/09/2024",
  beginChange: "12/08/2024",
  endChange: "23/08/2024",
  pdfFile: "/Grade-Horaria_2024-2.pdf",
});

// Reducers

//edit period
const editPeriod = (
  state,
  {
    currentPeriod,
    beginPeriod,
    endPeriod,
    beginLock,
    endLock,
    beginChange,
    endChange,
    pdfFile,
  }
) =>
  state.merge({
    currentPeriod,
    beginPeriod,
    endPeriod,
    beginLock,
    endLock,
    beginChange,
    endChange,
    pdfFile,
  });

//Update

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.EDIT_PERIOD]: editPeriod,
});
