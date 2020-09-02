import {MONTH_DATA} from './month.actions.js';


export const monthReducer = (state = [], action) => {
    switch(action.type){
        case MONTH_DATA:
            return action.payload.weatherData
        default: 
        return state
    }
}