const initialState = {};

export const geodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTIVATE_GEOD":
      return action.geod;
    case "CLOSE_GEOD":
      return {};
    default:
      return state;
  }
};
