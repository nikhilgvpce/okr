import { combineReducers } from "redux";
import listReducer from "./list";

const rootReducer = combineReducers({ listReducer });

export default rootReducer;
