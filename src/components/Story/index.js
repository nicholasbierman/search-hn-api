import "./story.css";

export const Story = ({ title, url, points, author, num_comments, story_title, comment_text }) => {
  return (
    <article className="Story">
      {title && (
        <div className="Story_container">
          <div className="Story_data">
            <div className="Story_title">
              <span>{title}</span>
              {url && <a href={url}>({url})</a>}
            </div>
            <div className="Story_meta">
              <span>{points} points |</span>
              <span>{author} |</span>
              <span>{num_comments} comments</span>
            </div>
          </div>
        </div>
      )}
      {!title && (
        <div className="Story_container">
          <div className="Story_data">
            <div className="Story_title">
              <span>{points} points |</span>
              <span> {author} |</span>
              <span> on: {story_title}</span>
              <br />
              <span className="Story__comment">{comment_text}</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Story;
