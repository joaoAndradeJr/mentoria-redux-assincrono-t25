import { GET_CHARACTER_DETAILS } from "../actions/actionTypes";

const INITIAL_STATE = {
  details: {},
};

function character(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CHARACTER_DETAILS:
    return {
      ...state,
      details: action.payload,
    };
  default:
    return state;
  }
}

export default character;
