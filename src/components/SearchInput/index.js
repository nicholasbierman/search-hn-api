import { useEffect, useState } from "react";
import "./SearchInput.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults, clearSearch } from "../../store/searchResults";
import { storeUserInput } from "../../store/searchTerms";
import { setCurrentSearchTerms } from "../../store/currentSearch";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const searchFilters = useSelector((state) => state.searchFilters);

  // useEffect(() => {
  //   console.log(searchFilters);
  //   dispatch(clearSearch());
  //   dispatch(getSearchResults(searchTerms, searchFilters.tags));
  // }, [ dispatch, searchTerms, searchFilters ]);
  
  const handleClick = () => {
    dispatch(storeUserInput(searchTerms));
    dispatch(getSearchResults(searchTerms, searchFilters.tags));
  };



  return (
    <div className="SearchInput__container">
      <input
        className="SearchInput"
        type="search"
        placeholder="Search stories by title, url, or author"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        ></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchInput;
