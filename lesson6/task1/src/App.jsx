import React from 'react';
import Counter from './components/Counter.jsx';
import { Provider } from 'react-redux';
import store from './store.js'

const App =() => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
};

export default App;