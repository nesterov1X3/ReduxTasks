import React from 'react';
import UsersList from './users/UsersList.jsx';
import { Provider } from 'react-redux';
import store from './store.js'

const App = () => {
    return (
        <Provider store={store}>
            <UsersList />
        </Provider>
    )
}
export default App;