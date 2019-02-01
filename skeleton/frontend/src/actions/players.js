import axios from "axios";
import { GET_PLAYERS, DELETE_PLAYER, ADD_PLAYER } from "./types";

export const getPlayers = () => dispatch => {
  axios
    .get("/api/players/")
    .then(response => {
      dispatch({
        type: GET_PLAYERS,
        players: response.data
      });
    })
    .catch(err => console.log(err));
};

export const deletePlayer = id => dispatch => {
  axios
    .delete(`/api/players/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_PLAYER,
        id: id
      });
    })
    .catch(err => console.log(err));
};

export const addPlayer = player => dispatch => {
  axios
    .post("/api/players/", player)
    .then(response => {
      dispatch({
        type: ADD_PLAYER,
        player: response.data
      });
    })
    .catch(err => console.log(err));
};
