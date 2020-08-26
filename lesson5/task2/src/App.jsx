import React from 'react';
import TransferList from './options/TransferList.jsx';
import { Provider } from 'react-redux';
import store from './store.js'

const App = () => {
    return (
        <Provider store={store}>
            <TransferList />
        </Provider>
    )
}
export default App;