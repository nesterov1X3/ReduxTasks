import React from 'react';
import { connect } from 'react-redux';
import * as actionsCreators from '../counter.actions.js'

const Counter = ({ counter, increment, decrement, reset }) => {

    return (
        <div className="counter">
            <button className="counter__button"
                onClick={decrement}>
                -
    </button>
            <span className="counter__value"
                onClick={reset}>
                {counter}
            </span>
            <button className="counter__button"
                onClick={increment}>
                +
    </button>
        </div>
    )
};

const mapState = state => {
    return {
        counter: state
    }
}

//HOC

const mapDispatch = {

    increment: actionsCreators.increment,
    decrement: actionsCreators.decrement,
    reset: actionsCreators.reset

}
const connector = connect(mapState, mapDispatch);
export default connector(Counter);