import React from 'react'
import Header from './Header.jsx'
import { userData, userContext } from './userData.js'

class App extends React.Component {
    state = {
        userData: {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001'
        }
    }


    render() {
       
        return (
            <userContext.Provider value={this.state.userData}>
                <div className="page">
                    <Header />
                </div>
            </userContext.Provider>

        )

    }
};

export default App;