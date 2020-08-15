import React from 'react'
import Header from './Header.jsx'
import { userData, userContext } from './userData.js'

class App extends React.Component {
    state = {
        userData: userData
    }


    render() {
        return (
            <div className="page">
               <Header/>
            </div>
        )

    }
};

export default App;