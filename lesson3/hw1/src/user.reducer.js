import { SAVE_USER, DELETE_USER } from './user.actions.js'

const user = {
    
}

 const userReducer = (state = user, action) => {
    switch (action.type) {
        case SAVE_USER: {
            return {
                ...state,
                user: action.payload.userData
            }
        };
        case DELETE_USER:  
          return null;

        
        default:
            return state
    }
};

export default userReducer;