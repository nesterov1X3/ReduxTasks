import { createStore, combineReducers } from 'redux'

import optionsReducer from './options/options.reducers.js';


const reducer = combineReducers({
    options: optionsReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;