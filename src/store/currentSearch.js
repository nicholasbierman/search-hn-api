
const SET_CURRENT_SEARCH_TERMS = 'currentSearch/setCurrentSearchTerms';

const storeCurrentSearchTerms = (searchTerms) => ({
    type: SET_CURRENT_SEARCH_TERMS,
    payload: searchTerms
});

export const setCurrentSearchTerms = (searchTerms) => async (dispatch) => {
    dispatch(storeCurrentSearchTerms(searchTerms));
};

function reducer (state = "", action) {
    switch (action.type) {
        case SET_CURRENT_SEARCH_TERMS:
            return `${action.payload}`;
        default:
            return state;
    }
};

export default reducer;