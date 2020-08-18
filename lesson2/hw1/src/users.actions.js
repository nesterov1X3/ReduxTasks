export const ADD = "add";
export const DELETE = "delete";

export const addUser = (user) => {
    return {
        type: ADD,
        user
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE,
        id,
    }
};