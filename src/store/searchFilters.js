const SET_SEARCH_FILTERS = 'searchFilters/setSearchFilters';

const storeSearchFilters = (filters) => ({
    type: SET_SEARCH_FILTERS,
    payload: filters,
});

export const setSearchFilters = (filters) => async (dispatch) => {
    dispatch(storeSearchFilters(filters));
};

function reducer (state = { tags: [] }, action) {
    switch (action.type) {
        case SET_SEARCH_FILTERS:
            let newState = { ...state };
            newState.tags = state.tags;
            newState.tags.push(action.payload);
            return newState;
        default:
            return state;
    }
};

export default reducer;