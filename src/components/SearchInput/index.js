import { useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults, getSearchResultsByDate } from "../../store/searchResults";
import { storeUserInput } from "../../store/searchTerms";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const { tags, searchType } = useSelector((state) => state.searchFilters);
  
  const handleChange = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleClick = () => {
    dispatch(storeUserInput(searchTerms));
    if (searchType === "date") {
      dispatch(getSearchResultsByDate(searchTerms, tags));
    } else dispatch(getSearchResults(searchTerms, tags));
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
