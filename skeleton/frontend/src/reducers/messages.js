import { CREATE_MESSAGE } from "../actions/types";

const INITIAL_STATE = {
    message : {}
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return Object.assign({},state,{
          message : action.message
      })
    default:
      return state;
  }
};
