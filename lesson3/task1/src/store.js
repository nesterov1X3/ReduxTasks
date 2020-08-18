import { createStore, combineReducers } from 'redux'
import { counterReducer } from './counter.reducer.js';
import  usersReducer  from './users.reducer.js'

const appReducer = combineReducers({
    counter: counterReducer, 
    users: usersReducer

})
const store = createStore(appReducer);


export default store;