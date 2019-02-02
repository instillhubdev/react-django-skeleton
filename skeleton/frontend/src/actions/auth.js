import axios from "axios";
import { getErrors } from "./messages";
import { USER_LOADED, LOADING_USER, AUTH_ERROR, GET_ERRORS } from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: LOADING_USER });
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
        dispatch({type : AUTH_ERROR});
    });
};
