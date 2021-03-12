import { useEffect, useState } from 'react';
import './SearchInput.css';
import { useDispatch } from 'react-redux';
import { getSearchResults, clearSearch } from '../../store/searchResults';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [ searchTerms, setSearchTerms ] = useState("")
  
  useEffect(() => {
    console.log(searchTerms);
    dispatch(clearSearch());
    dispatch(getSearchResults(searchTerms));
  }, [dispatch, searchTerms])
  
  return (
    <input
      className="SearchInput"
      type="search"
      placeholder="Search stories by title, url, or author"
      value={searchTerms}
      onChange={(e) => setSearchTerms(e.target.value)}></input>
  );
};

export default SearchInput;
