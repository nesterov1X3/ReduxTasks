import { store, increment, decrement } from "./counter.js";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());