import { createStore, combineReducers } from 'redux'
import { setLenguage } from './language.reducer.js';
import  productReducer  from './cart.reducer.js'
import userReducer from './user.reducer'

const appReducer = combineReducers({
    language: setLenguage, 
    product: productReducer,
    user: userReducer,
})
const store = createStore(appReducer);


export default store;