import React from 'react';

export const userData = {
    data: {
        name: 'Nikola Tesla',
        avatar_url: '#https://avatars3.githubusercontent.com/u10001'
    }
   
};

export const userContext = React.createContext(userData.data)