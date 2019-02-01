import axios from "axios";
import { GET_PLAYERS } from "./types";

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
