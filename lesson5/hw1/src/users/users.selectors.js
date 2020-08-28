import  { createSelector } from 'reselect';
export const usersSelectorUserList = state => {
    return state.users.usersList;
}

export const usersSelectorFilterText = state => {
    return state.users.filterText;
}


export const filteredUsersSelector = createSelector(
    [usersSelectorUserList,
     usersSelectorFilterText],
    (usersList, filterText) => {
        return usersList.filter(({ name }) =>
            name.toLowerCase().includes(filterText.toLowerCase()),
        );
    },
);