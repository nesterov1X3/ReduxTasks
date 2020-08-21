export const ENGLISH = "LANGUAGE/ENGLISH";
export const SPANISH = "LANGUAGE/SPANISH";
export const RUSSIAN = "LANGUAGE/RUSSIAN";


export const setLanguage = lang => {
    return {
        type: ENGLISH,
        payload: {
            lang
        }
    }
};

// export const spanish = () => {
//     return {
//         type: SPANISH
//     }
// };

// export const russian = () => {
//     return {
//         type: RUSSIAN
//     }
// };