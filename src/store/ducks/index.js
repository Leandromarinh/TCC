import { combineReducers } from "redux";

// import dos reducers
import { reducer as auth } from "./auth";

export default combineReducers({
  auth,
});
