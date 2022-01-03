import { createStore } from "redux";
import { counterReducer } from "./reducers";
// import { countReducer } from "./reducers/countReducer";
// import { combineReducers } from "redux";

// const reducer = combineReducers({
//   count: countReducer,
//   counter: counterReducer,
// });

export const store = createStore(counterReducer);
