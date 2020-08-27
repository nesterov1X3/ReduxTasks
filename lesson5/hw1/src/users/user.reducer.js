import { USER_FILTER } from './user.action.js'
//users.js

const users = [
    {
        id: 'id-0',
        age: 21,
        name: 'Bob',
    },
    {
        id: 'id-1',
        age: 17,
        name: 'Tom',
    },
    {
        id: 'id-2',
        age: 18,
        name: 'Tad',
    },

];

const initialState = {
    users: {
        filterText: '',
        usersList: users,
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FILTER:
            return {
                ...state,
                users: {
                    filterText: action.payload.filterText,
                    usersList: users,
                  },

            };
        default:
            return state
    }
}