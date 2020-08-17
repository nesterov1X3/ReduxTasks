import './index.scss';
import store, { increment, decrement, reset } from './store.js'

const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIcnrement = () => {
    store.dispatch(increment())
}
const onDecrement = () => {
    store.dispatch(decrement())
}

const onReset = () => {
    store.dispatch(reset())
}

incrementBtn.addEventListener('click', onIcnrement);
decrementBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
    const state = store.getState();
    // console.log(state)
    const currentValue = state.history.reduce((acc, value) => acc + value, 0);
    // console.log(currentValue)
    const addPlus = state.history
        .filter(item => item > 0)
        .map(item => `+${item}`)

    const minus = state.history
        .filter(item => item < 0)
    //    .map(item => `-${item}`)
    const historyString =addPlus.concat(minus).join(' ');
    // const historyString = state.history.join(' ');

    console.log(state.history)
    resultElem.textContent =
        state.history.length === 0
            ? ''
            : `${historyString} = ${currentValue}`;
})