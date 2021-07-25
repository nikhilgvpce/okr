import { combineReducers } from "redux";
import listReducer from "./list";

/**
 * this is the place to combine all the reducers in the application,
 * using combineReducers function provided by redux
 */

const rootReducer = combineReducers({ listReducer });

export default rootReducer;
