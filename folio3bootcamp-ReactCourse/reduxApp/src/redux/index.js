import { createStore } from "redux";
import { counterReducer } from "./reducers";

export const store = createStore(counterReducer);
