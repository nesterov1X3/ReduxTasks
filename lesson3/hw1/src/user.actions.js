export const SAVE_USER = 'USER/SAVE_USER';
export const DELETE_USER = 'USER/DELETE_USER';


export const saveUser = userData => {
    return {
        type: SAVE_USER,
        payload: {
            userData
        }
    }
};


export const deleteUser = () => {
    return {
        type: DELETE_USER,
    }
};
