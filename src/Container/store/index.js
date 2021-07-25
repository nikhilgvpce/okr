import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../redux/reducers";

/**
 * the following line creates a create store for the entier
 * application by taking rootReducer and applyingMiddleWare thunk
 */

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
