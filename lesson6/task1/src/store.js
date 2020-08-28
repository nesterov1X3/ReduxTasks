import { createStore, applyMiddleware, compose } from 'redux'
import { counterReducer } from './counter.reducer.js';

const logger = store => next => action => {
    console.group(action.type);
    console.info(action);
    const result = next(action);
    console.log('new state', store.getState());
    console.groupEnd();
    return result;


    
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(counterReducer,
    composeEnhancers(
        applyMiddleware(logger)
    )
  );


export default store;