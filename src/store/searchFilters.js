const SET_SEARCH_FILTERS = 'searchFilters/setSearchFilters';
const REMOVE_SEARCH_FILTER = 'searchFilters/removeSearchFilters';
const SET_AUTHOR_USERNAME = 'searchFilters/setAuthorUsername';
const REMOVE_AUTHOR_USERNAME = 'searchFilters/removeAuthorUsername';
const SET_STORY_ID = 'searchFilters/setStoryID';
const DELETE_STORY_ID = 'searchFilters/deleteStoryID';
const SET_SEARCH_TYPE = "searchType/setSearchType";

const setSearchType = (type) => ({
  type: SET_SEARCH_TYPE,
  payload: type,
});

const storeSearchFilters = (filters) => ({
    type: SET_SEARCH_FILTERS,
    payload: filters,
});

const deleteSearchFilter = (filter) => ({
    type: REMOVE_SEARCH_FILTER,
    payload: filter,
});

const setAuthorUsername = (username) => ({
    type: SET_AUTHOR_USERNAME,
    payload: username
});

const deleteAuthorUsername = () => ({
    type: REMOVE_AUTHOR_USERNAME
})

const setStoryId = (storyID) => ({
    type: SET_STORY_ID,
    payload: storyID
});

const deleteStoryId = () => ({
    type: DELETE_STORY_ID,
});

export const changeSearchType = (type) => (dispatch) =>
  dispatch(setSearchType(type));

export const addSearchFilter = (filter) => async (dispatch) => {
    dispatch(storeSearchFilters(filter));
};

export const addAuthorUsername = (username) => async (dispatch) => {
    dispatch(setAuthorUsername(username));
};

export const addStoryId = (storyID) => async (dispatch) => {
    dispatch(setStoryId(storyID));
};

export const removeStoryId = () => async (dispatch) => {
    dispatch(deleteStoryId());
};

export const removeAuthor = () => async (dispatch) => {
    dispatch(deleteAuthorUsername());
};

export const removeSearchFilter = (filter) => async (dispatch) => {
    dispatch(deleteSearchFilter(filter));
};

function reducer (state = { tags: [], author: null, storyID: "", searchType: "", }, action) {
    let newState;
    switch (action.type) {
        case SET_STORY_ID:
            newState = { ...state };
            newState.storyID = action.payload;
            return newState;
        case DELETE_STORY_ID:
            newState = { ...state };
            newState.storyID = "";
            return newState;
        case SET_AUTHOR_USERNAME:
            newState = { ...state };
            newState.author = action.payload;
            return newState;
        case REMOVE_AUTHOR_USERNAME:
            newState = { ...state };
            newState.author = "";
            return newState;
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
        case SET_SEARCH_TYPE:
            newState = { ...state };
            newState.searchType = action.payload;
            return newState;
        default:
            return state;
    }
};

export default reducer;