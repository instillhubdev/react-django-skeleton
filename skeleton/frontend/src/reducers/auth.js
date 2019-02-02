import { LOADING_USER, USER_LOADED, AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_USER:
      return Object.assign({}, state, {
        isLoading: true
      });
    case USER_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        user: action.user
      });
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return Object.assign({}, state, {
        isLoading: false,
        token: null,
        user: null,
        isAuthenticated: false
      });
    default:
      return state;
  }
};
