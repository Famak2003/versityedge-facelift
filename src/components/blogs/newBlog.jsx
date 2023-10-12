import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateBlog = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [img_url, setImg_url] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [authPosition, setAuthPosition] = useState("");
    const [uniName, setUniName] = useState("");
    const [category, setCategory] = useState("");
    return (
        <div className="create-blog">
            <form action="" method="post">
                <label>Blog Title: </label>
                <input 
                type="text"
                placeholder="minimum of three characters"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <label>Image Link: </label>
                <input 
                type="text"
                value={img_url}
                onChange={(e) => setImg_url(e.target.value)} />
                <label>Blog Content: </label>
                <input 
                type="text"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} />
                <label>Blog Category: </label>
                <input 
                type="text"
                required
                placeholder="post-UTME, JAMB, ..."
                value={category}
                onChange={(e) => setCategory(e.target.value)} />

                <button>Create Blog!</button>
            </form>
        </div>
    )
}

export default CreateBlog