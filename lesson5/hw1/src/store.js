import { createStore, combineReducers } from 'redux'
import { userReducer  } from './users/user.reducer.js'


// const reducer = combineReducers({ 
//     users: userReducer
// })

const store = createStore(userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;