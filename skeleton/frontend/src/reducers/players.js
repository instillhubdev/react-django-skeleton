import { GET_PLAYERS } from "../actions/types";

const INITIAL_STATE = {
  players: []
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.players
      };
    default:
      return state;
  }
};
