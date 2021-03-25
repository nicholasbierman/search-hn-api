import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearchFilter, removeSearchFilter } from "../../store/searchFilters";
import {
  setCreatedAt,
  setNumPoints,
  setNumComments,
} from "../../store/numericFilters";
import { addAuthorUsername, addStoryId } from "../../store/searchFilters";
import { changeSearchType } from "../../store/searchFilters";

export const SearchFilters = () => {
  const dispatch = useDispatch();
  const nbPages = useSelector((state) => state.searchResults.nbPages);
  const tags = useSelector((state) => state.searchFilters.tags);
  const [dateRange, setDateRange] = useState(0);

  const convertNbPagesToArray = (nbPages) => {
    let pagesArray = [];
    for (let i = 0; i <= nbPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  };

  const handleDateRangeChange = (e) => {
    let today = new Date();
    let previous = new Date(e.target.value * 1000);
    let unixToday = today.getTime();
    let previousUnix = previous.getTime();
    let greaterThanOrEqualTo = unixToday - previousUnix;
    console.log(new Date(greaterThanOrEqualTo));
    return dispatch(setCreatedAt(greaterThanOrEqualTo / 1000))
  }

  useEffect(() => {
    return convertNbPagesToArray(nbPages);
  }, [ nbPages ]);
  
  // useEffect(() => {
  //   /* JavaScript Date obj is in miliseconds */
  //   /* created_at_i is in seconds */
  //   /* so, we must do dateRange * 1000 */
  //   let date = new Date(dateRange * 1000);
  //   let today = new Date();
  //   let todaySeconds = today.getTime() / 1000;
  //   let ms = date.getTime();
  //   let seconds = ms / 1000;
  //   let diff = todaySeconds - seconds;
  //   console.log("DATE RANGE", dateRange);
  //   console.log("TODAY SECONDS", todaySeconds);
  //   console.log("TODAY", today);
  //   console.log("MS", ms);
  //   console.log("SECONDS", seconds);
  //   console.log("DIFF", diff);
  //   if (dateRange === "0") {
  //     dispatch(setCreatedAt(">=0"));
  //   } else {
  //     dispatch(setCreatedAt(dateRange));
  //   };
  // }, [dateRange, dispatch]);

  return (
    <div className="SearchFilters__container">
      <div className="SearchFilters_filters">
        <label>Search</label>
        <select
          multiple
          value={tags}
          onChange={(e) =>
            tags.includes(e.target.value)
              ? dispatch(removeSearchFilter(e.target.value))
              : dispatch(addSearchFilter(e.target.value))
          }>
          <option value="story">Stories</option>
          <option value="comment">Comments</option>
          <option value="poll">Poll</option>
          <option value="pollopt">PollOpt</option>
          <option value="show_hn">Show HN</option>
          <option value="ask_hn">Ask HN</option>
          <option value="front_page">Front Page</option>
        </select>
        <label>By</label>
        <select
          onChange={(e) =>
            dispatch(changeSearchType(e.target.value))
          }>
          <option value="popularity">Popularity</option>
          <option value="date">Date</option>
        </select>
        <label>for</label>
        <select defaultValue={0} onChange={handleDateRangeChange}>
          <option value={0}>All Time</option>
          <option value={86400}>Last 24h</option>
          <option value={604800}>Past Week</option>
          <option value={2629743}>Past Month</option>
          <option value={31556926}>Past Year</option>
        </select>
        <br />
        <label>Number of Points</label>
        <input
          onChange={(e) => dispatch(setNumPoints(e.target.value))}
          type="text"
          placeholder="<, <=, =, > or >="></input>
        <br />
        <label>Number of Comments</label>
        <input
          onChange={(e) => dispatch(setNumComments(e.target.value))}
          type="text"
          placeholder="<, <=, =, > or >="></input>
        <br />
        <label>Specify an Author Username</label>
        <input
          onChange={(e) => dispatch(addAuthorUsername(e.target.value))}
          type="text"
          placeholder="pg"></input>
        <br />
        <label>Specify a Story ID</label>
        <input placeholder="16582136" onChange={(e) => dispatch(addStoryId(e.target.value))}></input>

        <select>
          {nbPages &&
            convertNbPagesToArray(nbPages).map((page, i) => {
              return <option key={i}>{page}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;
