
import {addProduct, removeProduct} from './cart.actions.js'
import store from './store.js';
import { setLanguage } from './language.actions.js';
import {setUser, removeUser} from './user.actions'

store.subscribe(() => console.log(store.getState()))

store.dispatch(setLanguage('en'));



// store.dispatch(addProduct({id:33, name: 'fish'}))
// store.dispatch(addProduct({id:313, name: 'meat'}))

// store.dispatch(removeProduct(33))

// store.dispatch(setUser({ name: 'ros', age: 43}))

// store.dispatch(removeUser())