import React from 'react';

import { Provider } from 'react-redux';
import store from './store.js'
import UserInfo from './users/UserInfo.jsx';
import SearchField from './users/SearchField.jsx'

const App = () => {
    return (
        <Provider store={store}>
            <div className="page">
                <UserInfo />
                <SearchField />
            </div>
        </Provider>
    );
};

export default App;