import {MONTH_DATA} from './weather.actions.js';


export const monthReducer = (state = [], action) => {
    switch(action.type){
        case MONTH_DATA:
            return action.payload.weatherData
        default: 
        return state
    }
}