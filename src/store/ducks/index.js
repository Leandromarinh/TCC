import { combineReducers } from "redux";

// import dos reducers
import { reducer as auth } from "./auth";
import { reducer as period } from "./period";
import { reducer as cr } from "./cr";

export default combineReducers({
  auth,
  period,
  cr,
});
