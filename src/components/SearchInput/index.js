import { useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults, getSearchResultsByDate, generateSearchFilters } from "../../store/searchResults";
import { storeUserInput } from "../../store/searchTerms";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const searchFilters = useSelector((state) => state.searchFilters);
  const { tags, author, storyID, searchType } = searchFilters;
  const numericFilters = useSelector(state => state.numericFilters);
  
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleClick = () => {
    console.log(generateSearchFilters(tags, author, storyID))
    dispatch(storeUserInput(searchTerms));
    if (searchType === "date") {
      dispatch(getSearchResultsByDate(searchTerms, tags, author, storyID));
    };
    dispatch(getSearchResults(searchTerms, tags, author, storyID));
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
