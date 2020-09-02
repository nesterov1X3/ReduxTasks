import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {monthReducer} from "./weather/month.reducer.js";

const reducer = combineReducers({
  weather: monthReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
   composeEnhancers(applyMiddleware(thunk))
   );

export default store;