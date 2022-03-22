import * as actions from "../actions/action.js";
const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
