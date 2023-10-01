import ForumBlogs from "./forumBlogs"

const ForumFilter = ({ forumPosts }) => {

    return (
        <div className="forum-blogs">
            <div className="recent-discussions">
                <h1>Join a Discussion</h1>
                <p>Connect with fellow aspirants pursuing your dream course at your desired university. Exchange insights, receive expert advice, and stay updated on the latest admission trends.</p>
            </div>
            <ForumBlogs forumPosts={forumPosts}/>
        </div>
    )
}

export default ForumFilter