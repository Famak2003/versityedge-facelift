import { Link } from "react-router-dom";

const ForumBlogs = ({ forumPosts }) => {
  return (
    <div className="forum-blogs">
      <div className="grid-0 table-header">
        <h3>topic</h3>
        <h3>comment</h3>
        <h3>date</h3>
      </div>
      {forumPosts &&
        forumPosts.map((post) => (
          <Link
            to={`/forums/${post.title}`}
            className="post grid-0"
            key={post.id}
          >
            <div className="post-preview">
              <div className="unilogo"></div>
              <div className="text">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </div>
            </div>
            <h6>{post.id}</h6>
            <h4>
              {post.postTime > 168
                ? `${Math.floor(post.postTime / 168)} weeks`
                : `${Math.floor(post.postTime / 24)} days`}
            </h4>
          </Link>
        ))}
    </div>
  );
};

// {/* https://youtu.be/ZoayCCDHFiI?si=oqTuZwTQsM-zO2jp  */}
export default ForumBlogs;
