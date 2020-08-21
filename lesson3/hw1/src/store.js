import { createStore, combineReducers } from 'redux'
import { setLenguage } from './language.reducer.js';
import  productReducer  from './cart.reducer.js'
import userReducer from './user.reducer'

const appReducer = combineReducers({
    language: setLenguage, 
    user: userReducer,
    cart: productReducer,
})
const store = createStore(appReducer);


export default store;