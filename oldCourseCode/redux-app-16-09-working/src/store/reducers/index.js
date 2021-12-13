import { combineReducers } from "redux";
import textReducer from "./textReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    text: textReducer,
    counter: counterReducer
})

export default rootReducer;