import "./story.css";

export const Story = ({ title, url, points, author, num_comments }) => {
  return (
    <article className="Story">
      <div className="Story_container">
        <div className="Story_data">
          <div className="Story_title">
            <span>{title}</span>
            {url && <a href={url}>({url})</a>}
          </div>
          <div className="Story_meta">
            {points} Points | {author} | {num_comments} Comments
          </div>
        </div>
      </div>
    </article>
  );
};

export default Story;
