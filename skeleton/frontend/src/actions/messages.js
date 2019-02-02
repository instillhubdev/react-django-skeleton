import { CREATE_MESSAGE, GET_ERRORS } from "./types";

export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    message: message
  };
};

export const getErrors = (errorMessage, status) => {
  return {
    type: GET_ERRORS,
    error: { errorMessage, status }
  };
};
