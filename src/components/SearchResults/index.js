import { useSelector } from 'react-redux';
import { Story } from '../Story';
import './SearchResults.css';

export const SearchResults = () => {
    const searchResults = useSelector(state => state.searchResults.hits);
    return (
        <section className="SearchResults">
            <div className="SearchResults__container">
                {searchResults && searchResults.map((result, i) => {
                    return <Story key={i} title={result.title} url={result.url} points={result.points} author={result.author} num_comments={result.num_comments} story_title={result.story_title} comment_text={result.comment_text}/>
                })}
            </div>
        </section>
    );
};

export default SearchResults;