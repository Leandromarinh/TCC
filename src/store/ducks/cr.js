import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// Types & Action creators
const { Types, Creators } = createActions({
  fillFields: ["cro", "cr", "crDesejado", "pa"],
  editSubjectList: ["subjectList2"],
});

export const AuthTypes = Types;
export default Creators;

// Initial State
const INITIAL_STATE = Immutable({
  cro: null,
  cr: null,
  crDesejado: null,
  pa: null,
  subjectList2: [],
  nota: 0,
  notas: [],
  CR: 0,
});

// Reducers

// Fill Fields
const fillFields = (state, { cro, cr, crDesejado, pa }) =>
  state.merge({
    cro,
    cr,
    crDesejado,
    pa,
  });

// Edit Subject List
const editSubjectList = (state, { subjectList2 }) =>
  state.merge({
    subjectList2,
  });

// Update
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FILL_FIELDS]: fillFields,
  [Types.EDIT_SUBJECT_LIST]: editSubjectList,
});
