import  {addUser, deleteUser} from './users.actions.js';
import store from './store.js';

store.dispatch(addUser({
    id: 76,
    name: 'Sarah'
}))
store.dispatch(addUser({
    id: 66,
    name: 'Trah'
}))
store.dispatch(addUser({
    id: 16,
    name: 'Hah'
}))

store.dispatch(deleteUser(76))

store.subscribe(() => {
    const state = store.getState()
})
// const state = store.getState()
// console.log(state)