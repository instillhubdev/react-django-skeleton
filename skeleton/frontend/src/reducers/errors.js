import { GET_ERRORS } from "../actions/types";

const initialState = {
  errorMessage: {},
  status: null
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return Object.assign({}, state, {
        errorMessage: action.error.errorMessage,
        status: action.error.status
      });
    default:
      return state;
  }
};
