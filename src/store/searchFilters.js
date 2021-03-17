const SET_SEARCH_FILTERS = 'searchFilters/setSearchFilters';
const REMOVE_SEARCH_FILTER = 'searchFilters/removeSearchFilters';

const storeSearchFilters = (filters) => ({
    type: SET_SEARCH_FILTERS,
    payload: filters,
});

const deleteSearchFilter = (filter) => ({
    type: REMOVE_SEARCH_FILTER,
    payload: filter,
})

export const addSearchFilter = (filter) => async (dispatch) => {
    dispatch(storeSearchFilters(filter));
};

export const removeSearchFilter = (filter) => async (dispatch) => {
    dispatch(deleteSearchFilter(filter));
}

function reducer (state = { tags: [] }, action) {
    let newState;
    switch (action.type) {
        case SET_SEARCH_FILTERS:
            newState = { ...state };
            newState.tags = state.tags;
            newState.tags.push(action.payload);
            return newState;
        case REMOVE_SEARCH_FILTER:
            newState = { ...state };
            newState.tags = state.tags;
            let indexToRemove = newState.tags.indexOf(action.payload);
            newState.tags.splice(indexToRemove, 1);
            return newState;
        default:
            return state;
    }
};

export default reducer;