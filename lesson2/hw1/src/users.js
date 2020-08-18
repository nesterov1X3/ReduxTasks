// import {initialState} from './store.js'

const initialState = {
    usersList: []
}
const ADD = "add";
const DELETE = "delete";

export const addUser = (user) => {
    return {
        type: ADD,
        user
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE,
        id,
    }
};

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