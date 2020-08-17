// import { createStore } from 'redux';

// export const incrementAction = {
//     type:'INCREMENT',
// }

// export const decrementAction = {
//     type:'DECREMENT',
// };


// const counterReducer = (state = 0, action) => {
//     switch (action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state; 
//     }
// }

// const store = createStore(counterReducer);

// console.log(store.getState())
// store.dispatch(incrementAction)
// store.dispatch(incrementAction)
// store.dispatch(decrementAction)

// console.log(store.getState)



import { createStore } from 'redux';

// const INCREMENT='COUNTER/INCREMENT'
// const DECREMENT='COUNTER/DECREMENT'
export const increment = () => {
    return {
        type: 'INCREMENT',
    }
};
export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
};
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
export const store = createStore(counterReducer);

// console.log(store.getState())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())

// console.log(store.getState())