export const SHOW_SPINNER = 'SHOW_SPINNER'
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';
import { getUserData } from './users.gateway.js'


export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
    }
}


export const userDataRecieved= (userData) => {
    return {
        type: USER_DATA_RECEIVED,
        payload: {
            userData
        }
    }
}

export const fetchUserData = (userName) => {
    return function(dispatch){
      getUserData(userName)
        .then(userData => {
            dispatch(showSpinner())
            dispatch(userDataRecieved(userData))
        });
    }
}