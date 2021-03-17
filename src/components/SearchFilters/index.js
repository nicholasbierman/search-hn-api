import { useEffect } from "react";
import { useSelector } from 'react-redux';

export const SearchFilters = () => {
    const nbPages = useSelector(state => state.searchResults.nbPages);
    const convertNbPagesToArray = (nbPages) => {
        let pagesArray = [];
        for (let i = 0; i <= nbPages; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }
    useEffect(() => {
        return convertNbPagesToArray(nbPages);
    }, [nbPages])

    return (
        <div className="SearchFilters container">
            <div className="SearchFilters_filters">
                <label>Search</label>
                <select multiple>
                    <option value="all">All</option>
                    <option value="story">Stories</option>
                    <option value="comment">Comments</option>
                    <option value="poll">Poll</option>
                    <option value="pollopt">PollOpt</option>
                    <option value="show_hn">Show HN</option>
                    <option value="ask_hn">Ask HN</option>
                    <option value="front_page">Front Page</option>
                </select>
                <label>By</label>
                <select>
                    <option value="popularity">Popularity</option>
                    <option value="date">Date</option>
                </select>
                <label>for</label>
                <select>
                    <option value="alltime">All Time</option>
                    <option value="day">Last 24h</option>
                    <option value="week">Past Week</option>
                    <option value="month">Past Month</option>
                    <option value="year">Past Year</option>
                </select>
                <select>
                    {nbPages && convertNbPagesToArray(nbPages).map((page, i) => {
                        return <option key={i}>{page}</option>
                    })}
                </select>
            </div>
        </div>
    );
};

export default SearchFilters;