import  {increment, decrement, reset} from './counter.actions.js';
import store from './store.js';

store.subscribe(() => console.log(store.getState()))

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());