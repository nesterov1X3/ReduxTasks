import { SAVE_USER, DELETE_USER } from './user.actions.js'

const userState = {
    userList: []
}

 const userReducer = (state = userState, action) => {
    switch (action.type) {
        case SAVE_USER: {
            return {
                ...state,
                userList: state.userList.concat(action.payload.userData)
            }
        };
        case DELETE_USER:  
          return null;

        
        default:
            return state
    }
};

export default userReducer;