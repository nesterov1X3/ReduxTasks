import { ENGLISH} from './language.actions.js'



export const setLenguage = (state = 'en', action) => {
    switch (action.type) {
        case ENGLISH:
            return state = action.payload.lang;
        // case SPANISH:
        //     return state = 'spa';
        // case RUSSIAN:
        //     return state = 'rus';
        default:
            return state;
    }
};