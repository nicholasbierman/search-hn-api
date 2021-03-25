const SET_SEARCH_RESULTS = "searchResults/getSearchResults";
const CLEAR_SEARCH_RESULTS = "searchResults/clearSearchResults";

const storeSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

const generateTagsUrl = (tags, author, storyID) => {
    let url = 'tags=';
    let tagString;
    let authorString;
    let storyIdString;
    if (tags.length !== 0) {
        tagString = tags.length > 1 ? `(${tags.join(",")})` : tags[ 0 ];
        url = url.concat(tagString);
    };
    if (author) {
        authorString = `author_${author}`;
        if (url === "tags=") {
            url = url.concat(authorString);
        } else {
            url = url.concat(',', authorString);
        }
    };
    if (storyID) {
        storyIdString = `story_${storyID}`;
        if (url === "tags=") {
            url = url.concat(storyIdString);
        } else {
            url = url.concat(',', storyIdString);
        };
    };
    return url;
};

/* Sorted by relevance, then points, then number of comments */
export const getSearchResults = (
  searchTerms,
  tags,
    author,
  storyID,
  numericFilters,
  page
) => async (dispatch) => {
//     let tagString = tags.length > 1 ? `(${tags.join(",")})` : tags[ 0 ];
//     console.log(tagString);
//     if (author && tagString && storyID) {
//         tagString = tagString.concat(',author_', author, ',story_', storyID);
//         console.log("NEW TAGSTRING", tagString);
//     }
//   if (!tagString) {
//     const response = await fetch(
//       `http://hn.algolia.com/api/v1/search?query=${searchTerms}`
//     );
//     const data = await response.json();
//     dispatch(storeSearchResults(data));
//   } else {
//     const response = await fetch(
//       `http://hn.algolia.com/api/v1/search?query=${searchTerms}&tags=${tagString}&numericFilters=&page=`
//     );
//     const data = await response.json();
//     dispatch(storeSearchResults(data));
//   }
    let tagsUrl = generateTagsUrl(tags, author, storyID);
    console.log(tagsUrl);
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerms}&${tagsUrl}`);
    const data = await response.json();
    dispatch(storeSearchResults(data));
};

/* Sorted by date, most recent first */
export const getSearchResultsByDate = (searchTerms, tags, author, storyID) => async (
  dispatch
) => {
  let tagsUrl = generateTagsUrl(tags, author, storyID);
  console.log(tagsUrl);
  const response = await fetch(
    `http://hn.algolia.com/api/v1/search_by_date?query=${searchTerms}&${tagsUrl}`
  );
  const data = await response.json();
  dispatch(storeSearchResults(data));
};

export const getItemById = (id) => async (dispatch) => {
  const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
  const data = await response.json();
  console.log(data);
  dispatch(storeSearchResults(data));
};

export const getUserByUsername = (username) => async (dispatch) => {
  const response = await fetch(
    `http://hn.algolia.com/api/v1/users/${username}`
  );
  const data = await response.json();
  dispatch(storeSearchResults(data));
};

/* Clear search terms from store */
export const clearSearch = () => async (dispatch) => {
  dispatch(clearSearchResults());
};

function reducer(state = { hits: [], nbPages: 1, page: 0 }, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      let newState = { ...state };
      newState.hits = action.payload.hits;
      newState.nbPages = action.payload.nbPages;
      newState.page = action.payload.page;
      return newState;
    case CLEAR_SEARCH_RESULTS:
      return state;
    default:
      return state;
  }
}

export default reducer;
