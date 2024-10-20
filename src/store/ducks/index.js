import { combineReducers } from "redux";

// import dos reducers
import { reducer as auth } from "./auth";
import { reducer as user } from "./user";
import { reducer as cr } from "./cr";

export default combineReducers({
  auth,
  user,
  cr,
});
