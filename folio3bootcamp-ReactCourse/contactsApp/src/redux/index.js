import { createStore } from "redux";
import { contactReducer } from "./reducers";
// import { countReducer } from "./reducers/countReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  contact: contactReducer,
});

export const store = createStore(reducer);
