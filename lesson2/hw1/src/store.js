import { createStore } from 'redux'
import {formUsers} from './users.reducer.js'


const store = createStore(formUsers);



export default store;
