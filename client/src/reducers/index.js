import { combineReducers } from "redux";

import counter from "./counter.js";

const reducers = combineReducers({
  counter,
});

export default reducers;
