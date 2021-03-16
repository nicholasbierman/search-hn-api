import { useSelector } from 'react-redux';
import { Story } from '../Story';

export const SearchResults = () => {
    const searchResults = useSelector(state => state.searchResults);
    return (
        <section className="SearchResults">
            <div className="SearchResults__container">
                {searchResults && searchResults.map((result, i) => {
                    return <Story key={i} title={result.title} url={result.url} points={result.points} author={result.author} num_comments={result.num_comments} />
                })}
            </div>
        </section>
    );
};

export default SearchResults;