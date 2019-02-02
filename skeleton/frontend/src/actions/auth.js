import axios from "axios";
import { getErrors } from "./messages";
import {
  USER_LOADED,
  LOADING_USER,
  AUTH_ERROR,
  GET_ERRORS,
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_USER
} from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: LOADING_USER, isLoading: true });
  //Get token from the state
  const token = getState().auth.token;
  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  //If token, append to headers
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("/api/auth/user", config)
    .then(response => {
      dispatch({
        type: USER_LOADED,
        user: response.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const loginUser = (username, password) => dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, password });
  axios
    .post("/api/auth/login", body, config)
    .then(response => {
      dispatch({
        type: LOGIN_USER,
        user: response.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAILURE
      });
    });
};

export const doLogout = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .post("/api/auth/logout",null,config)
    .then(response => {
      dispatch({
        type: LOGOUT_USER
      });
    })
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
    });
};
