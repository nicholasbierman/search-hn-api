const STORE_SEARCH_TERMS = 'searchTerms/storeSearchTerms';

const storeSearchTerms = (searchTerms) => ({
    type: STORE_SEARCH_TERMS,
    payload: searchTerms,
});

export const storeUserInput = (searchTerms) => async (dispatch) => {
    const searchTermsArray = searchTerms.split(" ")
    dispatch(storeSearchTerms(searchTermsArray));
};

function reducer (state = [], action) {
    switch (action.type) {
        case STORE_SEARCH_TERMS:
            return [ ...state, ...action.payload ]
        default:
            return state;
    }
};

export default reducer;