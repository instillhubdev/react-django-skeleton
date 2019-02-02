import { combineReducers } from "redux";
import players from "./players";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  players,
  errors,
  messages,
  auth
});
