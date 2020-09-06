import React from 'react';
import TodoList from './tasks/componets/TodoList.jsx';
import { Provider } from 'react-redux';
import store from './store.js'

const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
};

export default App;