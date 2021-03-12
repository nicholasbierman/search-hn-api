const SET_SEARCH_FILTERS = 'searchFilters/setSearchFilters';

const storeSearchFilters = (filters) => ({
    type: SET_SEARCH_FILTERS,
    payload: filters,
});

export const setSearchFilters = (filters) => async (dispatch) => {
    dispatch(storeSearchFilters(filters));
};

function reducer (state = {}, action) {
    switch (action.type) {
        case SET_SEARCH_FILTERS:
            let newState = { ...state };
            return {}
        default:
            return state;
    }
};

export default reducer;