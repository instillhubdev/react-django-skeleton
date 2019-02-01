import { GET_PLAYERS, DELETE_PLAYER } from "../actions/types";

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
      return Object.assign({}, state, {
        players: action.players
      });
    case DELETE_PLAYER:
      return Object.assign({}, state, {
        players: state.players.filter(player => player.id !== action.id)
      });

    default:
      return state;
  }
};
