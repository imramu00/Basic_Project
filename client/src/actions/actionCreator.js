import * as actions from "./action.js";

export const increment = () => {
  return {
    type: actions.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actions.DECREMENT,
  };
};
