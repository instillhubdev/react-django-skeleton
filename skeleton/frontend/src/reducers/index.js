import { combineReducers } from "redux";
import players from "./players";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  players,
  errors,
  messages
});
