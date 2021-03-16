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
    console.log(data);
    dispatch(storeSearchResults(data));
};

/* Sorted by date, most recent first */
export const getSearchResultsByDate = (searchTerms) => async (dispatch) => {
    const response = await fetch(
      `http://hn.algolia.com/api/v1/search_by_date?query=${searchTerms}`
    );
    const data = await response.json();
    dispatch(storeSearchResults(data.hits));
}

export const getItemById = (id) => async (dispatch) => {
    const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
    const data = await response.json();
    console.log(data);
    dispatch(storeSearchResults(data));
};

export const getUserByUsername = (username) => async (dispatch) => {
    const response = await fetch(`http://hn.algolia.com/api/v1/users/${username}`);
    const data = await response.json();
    dispatch(storeSearchResults(data))
}


/* Clear search terms from store */
export const clearSearch = () => async (dispatch) => {
    dispatch(clearSearchResults())
}

function reducer (state = {hits: [], nbPages: 1}, action) {
    switch (action.type) {
        case SET_SEARCH_RESULTS:
            let newState = { ...state };
            newState.hits = action.payload.hits;
            newState.nbPages = action.payload.nbPages;
            return newState;
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
};

export default reducer;