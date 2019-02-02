import axios from "axios";
import { GET_PLAYERS, DELETE_PLAYER, ADD_PLAYER, GET_ERRORS } from "./types";
import { createMessage, getErrors } from "./messages";

export const getPlayers = () => dispatch => {
  axios
    .get("/api/players/")
    .then(response => {
      dispatch({
        type: GET_PLAYERS,
        players: response.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
    });
};

export const deletePlayer = id => dispatch => {
  axios
    .delete(`/api/players/${id}`)
    .then(response => {
      dispatch(createMessage({ playerDeleted: "Player got deleted" }));
      dispatch({
        type: DELETE_PLAYER,
        id: id
      });
    })
    .catch(err => {
      dispatch(getErrors(err.response.data,err.response.status));
    });
};

export const addPlayer = player => dispatch => {
  axios
    .post("/api/players/", player)
    .then(response => {
      dispatch(createMessage({ playerAdded: "New player got added." }));
      dispatch({
        type: ADD_PLAYER,
        player: response.data
      });
    })
    .catch(err => {
      dispatch(getErrors(err.response.data,err.response.status));
    });
};
