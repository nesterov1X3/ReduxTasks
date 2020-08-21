
import {addProduct, deleteProduct} from './cart.actions.js'
import store from './store.js';
import { english, spanish } from './language.actions.js';
import {saveUser, deleteUser} from './user.actions'

store.subscribe(() => console.log(store.getState()))

store.dispatch(english());
// store.dispatch(spanish());



// store.dispatch(addProduct({id:33, name: 'fish'}))
// store.dispatch(addProduct({id:313, name: 'meat'}))

// store.dispatch(deleteProduct(33))

// store.dispatch(saveUser({ name: 'ros'}))

// store.dispatch(deleteUser())