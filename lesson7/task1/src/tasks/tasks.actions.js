const { default: thunk } = require("redux-thunk")
import {fetchTasksList} from './tasksGateway.js'
export const TASKS_LIST_RECEIVED = 'TASKS_LIST_RECEIVED';

export const tasksListRecieved = (tasksList) => {
    const action = {
        type: TASKS_LIST_RECEIVED,
        payload:{
            tasksList
        }
  }
  return action
}

export const getTasksList = () => {
    const thunkAction = function(dispatch) {
        fetchTasksList()
            .then(tasksList => dispatch(tasksListRecieved(tasksList)))
    }
    return thunkAction;
}