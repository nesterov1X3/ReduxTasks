import {createSelector} from 'reselect';


export const optionsListSelectors = state => {
    return state.options.optionsList;
}

export const optionsIdsSelectors = state => {
    return state.options.selected
}

export const selectedOptionsSelector = createSelector(
    [optionsListSelectors, optionsIdsSelectors],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => selectedIds.includes(option.id))
    }
)

export const availebleOptionsSelector = createSelector(
    [optionsListSelectors, optionsIdsSelectors],
    (allOptionsList, selectedIds) => {
        return allOptionsList.filter(option => !selectedIds.includes(option.id))
    }
)
// export const selectedOptionsSelector = state => {
//     const allOptionsList = optionsListSelectors(state)
//     const selectedIds = optionsIdsSelectors(state)

//     return allOptionsList.filter(option => selectedIds.includes(option.id))
// }


// export const availebleOptionsSelector = state => {
//     const allOptionsList = optionsListSelectors(state)
//     const selectedIds = optionsIdsSelectors(state)

//     return allOptionsList.filter(option => !selectedIds.includes(option.id))
// }