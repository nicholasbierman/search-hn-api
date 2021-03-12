const SET_SEARCH_RESULTS = 'searchResults/getSearchResults';
const CLEAR_SEARCH_RESULTS = 'searchResults/clearSearchResults';

const storeSearchResults = (results) => ({
    type: SET_SEARCH_RESULTS,
    payload: results
});

const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})


/* Sorted by relevance, then points, then number of comments */
export const getSearchResults = (searchTerms) => async (dispatch) => {
    const response = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchTerms}`
    );
    const data = await response.json();
    dispatch(storeSearchResults(data.hits));
};

/* Sorted by date, most recent first */
export const getSearchResultsByDate = (searchTerms) => async (dispatch) => {
    const response = await fetch(
      `http://hn.algolia.com/api/v1/search_by_date?query=${searchTerms}`
    );
    const data = await response.json();
    dispatch(storeSearchResults(data.hits));
}


/* Clear search terms from store */
export const clearSearch = () => async (dispatch) => {
    dispatch(clearSearchResults())
}

function reducer (state = [], action) {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            return [ ...state, ...action.payload ];
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
};

export default reducer;