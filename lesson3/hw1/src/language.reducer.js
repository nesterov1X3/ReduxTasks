import { ENGLISH, SPANISH, RUSSIAN} from './language.actions.js'



export const setLenguage = (state = 'en', action) => {
    switch (action.type) {
        case ENGLISH:
            return state = 'en';
        case SPANISH:
            return state = 'spa';
        case RUSSIAN:
            return state = 'rus';
        default:
            return state;
    }
};