import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchFilters } from '../../store/searchFilters';

export const SearchFilters = () => {
    const dispatch = useDispatch();


    return (
        <div className="SearchFilters container">
            <div class="SearchFilters_filters">
                <label>Search</label>
                <select>
                    <option value="all">All</option>
                    <option value="stories">Stories</option>
                    <option value="comments">Comments</option>
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
            </div>
        </div>
    );
};

export default SearchFilters;