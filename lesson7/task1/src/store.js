import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {tasksReducer} from './tasks/tasks.reducer.js'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    tasks: tasksReducer
})

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk)))
export default store;