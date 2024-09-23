import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// Types & Action creators
const { Types, Creators } = createActions({
  fillFields: ["cro", "cr", "crDesejado", "pa"],
  editSubjectList: ["subjectList"],
  setNota: ["nota"],
  editNotasList: ["notas"],
  setCr: ["CR"],
  setCredito: ["credito"],
});

export const AuthTypes = Types;
export default Creators;

// Initial State
const INITIAL_STATE = Immutable({
  cro: null,
  cr: null,
  crDesejado: null,
  pa: null,
  subjectList: [],
  nota: 0,
  notas: [],
  CR: 0,
  credito: 0,
});

// Reducers

// Fill Fields
const fillFields = (state, { cro, cr, crDesejado, pa }) => {
  return state.merge({
    cro,
    cr,
    crDesejado,
    pa,
  });
};

// Edit Subject List
const editSubjectList = (state, { subjectList }) => {
  return state.merge({
    subjectList,
  });
};

// Set Nota
const setNota = (state, { nota }) => {
  return state.merge({
    nota,
  });
};

// Edit Notas List
const editNotasList = (state, { notas }) => {
  return state.merge({
    notas,
  });
};

// Set CR
const setCr = (state, { CR }) => {
  return state.merge({
    CR,
  });
};

// Set Credito
const setCredito = (state, { credito }) => {
  return state.merge({
    credito,
  });
};

// Update
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FILL_FIELDS]: fillFields,
  [Types.EDIT_SUBJECT_LIST]: editSubjectList,
  [Types.SET_NOTA]: setNota,
  [Types.EDIT_NOTAS_LIST]: editNotasList,
  [Types.SET_CR]: setCr,
  [Types.SET_CREDITO]: setCredito,
});
