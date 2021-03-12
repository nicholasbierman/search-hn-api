import SearchInput from "../SearchInput";
import SearchFilters from "../SearchFilters";
import "./SearchHeader.css";

export const SearchHeader = () => {
  return (
      <header className="SearchHeader">
        <div className="SearchHeader__container">
          <SearchInput />
        </div>
      </header>
  );
};

export default SearchHeader;
