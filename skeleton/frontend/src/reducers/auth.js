import {
  LOADING_USER,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGOUT_USER
} from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
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
        isLoading: action.isLoading
      });
    case USER_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        isAuthenticated: true,
        user: action.user
      });
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return Object.assign({}, state, {
        isLoading: false,
        token: null,
        user: null,
        isAuthenticated: false
      });
    case LOGIN_USER:
      localStorage.setItem("token", action.user.token);
      return Object.assign({}, state, {
        user: action.user,
        isAuthenticated: true,
        isLoading: false
      });
    default:
      return state;
  }
};
