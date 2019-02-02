import { CREATE_MESSAGE } from "./types";

export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    message: message
  };
};
