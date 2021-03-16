

export const Story = ({ title, url, points, author, num_comments }) => {
    return (
        <div className="Story_container">
            <div className="Story_title">
                <span>{title}</span>
                {url && <a href={url}>({url})</a>}
            </div>
            <div className="Story_meta">
                Points: {points} Author: {author} Comments: {num_comments}
            </div>
        </div>
    );
};

export default Story;