import { useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults, getSearchResultsByDate } from "../../store/searchResults";
import { storeUserInput } from "../../store/searchTerms";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const searchFilters = useSelector((state) => state.searchFilters);
  const { tags, author, storyID, searchType } = searchFilters;
  const numericFilters = useSelector(state => state.numericFilters);
  const { created_at_i, points, num_comments } = numericFilters;
  const page = useSelector(state => state.searchResults.page);


  
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleClick = () => {
    dispatch(storeUserInput(searchTerms));
    if (searchType === "date") {
      dispatch(getSearchResultsByDate(searchTerms, tags, author, storyID, created_at_i, points, num_comments, page));
    };
    dispatch(
      getSearchResults(
        searchTerms,
        tags,
        author,
        storyID,
        created_at_i,
        points,
        num_comments,
        page
      )
    );
  };


  return (
    <div className="SearchInput__container">
      <input
        className="SearchInput"
        type="search"
        placeholder="Search stories by title, url, or author"
        value={searchTerms}
        onChange={handleChange}
        ></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchInput;
