import  {increment, decrement, reset} from './counter.actions.js';
import {addUser, deleteUser, updateUser} from './users.actions.js'
import store from './store.js';

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());


store.dispatch(addUser({id:33, name: 'Tom'}))
store.dispatch(addUser({id:313, name: 'Som'}))


store.dispatch(deleteUser(33))


store.dispatch(updateUser(313, {name: 'sas', age: 23}))