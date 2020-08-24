import { createStore } from 'redux'
import { counterReducer } from './counter.reducer.js';


const store = createStore(counterReducer);


export default store;