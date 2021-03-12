import { useEffect, useState } from 'react';
import './SearchInput.css';
import { useDispatch } from 'react-redux';
import { getSearchResults, clearSearch } from '../../store/searchResults';
import { storeUserInput } from '../../store/searchTerms';
import { setCurrentSearchTerms } from '../../store/currentSearch';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [ searchTerms, setSearchTerms ] = useState("")
  
  useEffect(() => {
    dispatch(clearSearch());
    dispatch(getSearchResults(searchTerms));
  }, [dispatch, searchTerms])
  
  return (
    <input
      className="SearchInput"
      type="search"
      placeholder="Search stories by title, url, or author"
      value={searchTerms}
      onChange={(e) => setSearchTerms(e.target.value)}
      onBlur={(e) => dispatch(storeUserInput(e.target.value), dispatch(setCurrentSearchTerms(e.target.value)))}></input>
  );
};

export default SearchInput;
