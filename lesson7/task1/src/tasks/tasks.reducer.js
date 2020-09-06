import {TASKS_LIST_RECEIVED} from './tasks.actions.js'
const initialState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action) => {
    switch(action.type){
        case TASKS_LIST_RECEIVED: 
        return {
            ...state,
            tasks:action.payload.tasksList
        }
        default:
            return state
    }
}