import { useSelector } from "react-redux";

export const Pagination = () => {
    const nbPages = useSelector(state => state.searchResults.nbPages);
    const pagesArray = new Array(nbPages);
    return (
        <ul className="Pagination">
            {pagesArray && pagesArray.map((num, i) => {
                return <li key={i}>{num}</li>;
            })}
        </ul>
    );
};

export default Pagination;