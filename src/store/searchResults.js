const STORE_SEARCH_RESULTS = 'searchResults/getSearchResults';
const CLEAR_SEARCH_RESULTS = 'searchResults/clearSearchResults';

const storeSearchResults = (results) => ({
    type: STORE_SEARCH_RESULTS,
    payload: results
});

const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})



export const getSearchResults = (searchTerms) => async (dispatch) => {
    const response = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchTerms}`
    );
    const data = await response.json();
    dispatch(storeSearchResults(data.hits));
};

export const clearSearch = () => async (dispatch) => {
    dispatch(clearSearchResults())
}

function reducer (state = [], action) {
    switch (action.type) {
        case STORE_SEARCH_RESULTS:
            return [ ...state, ...action.payload ];
        case CLEAR_SEARCH_RESULTS:
            return [];
        default:
            return state;
    }
};

export default reducer;