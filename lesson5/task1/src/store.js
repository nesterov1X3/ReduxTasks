import { createStore } from 'redux'
import  userReducer  from './users/user.reducer.js'

const store = createStore(userReducer);


export default store;