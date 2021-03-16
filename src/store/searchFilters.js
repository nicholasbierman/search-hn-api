const SET_SEARCH_FILTERS = 'searchFilters/setSearchFilters';

const storeSearchFilters = (filters) => ({
    type: SET_SEARCH_FILTERS,
    payload: filters,
});

export const setSearchFilters = (filters) => async (dispatch) => {
    dispatch(storeSearchFilters(filters));
};

function reducer (state = { tags: "all", orderBy: "popularity", timeRange: "alltime" }, action) {
    switch (action.type) {
        case SET_SEARCH_FILTERS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
};

export default reducer;