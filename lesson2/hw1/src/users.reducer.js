import { ADD, DELETE} from './users.actions.js'

export const initialState = {
    usersList: []
}

export const formUsers = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(action.user)
            };
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.id)

            };
         default:
            return state
    }
}