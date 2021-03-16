import { useSelector } from "react-redux";

export const Pagination = () => {
    const nbPages = useSelector(state => state)
    return (
        <ul className="Pagination">

        </ul>
    )
}