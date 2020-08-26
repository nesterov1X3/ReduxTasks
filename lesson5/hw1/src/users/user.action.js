export const USER_FILTER = 'USER/USER_FILTER';

export const userFilter = userData => {
    return {
        type:USER_FILTER,
        payload: {
            userData
        }
    }
}