import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./blogs.css"

const CreateBlog = ({baseURL}) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [img_url, setImg_url] = useState("");
    const [content, setContent] = useState("");
    // const [author, setAuthor] = useState("");
    // const [authPosition, setAuthPosition] = useState("");
    const [uniName, setUniName] = useState("");
    const [category, setCategory] = useState("");

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, img_url, content, category, uniName};
        setIsPending(true);
        fetch("http://versityedge1.eastus.cloudapp.azure.com/v1/blog/posts", {
            method : "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(post)
        })
        .then(() => {
            setIsPending(false)
            navigate("/blogs")
        })
    }
    return (
        <div className="create-blog">
            <h1>Create a Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                type="text"
                placeholder="minimum of three characters"
                required
                minLength={3}
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <label>Image Link: </label>
                <input 
                type="text"
                value={img_url}
                onChange={(e) => setImg_url(e.target.value)} />
                <label>Blog Content: </label>
                <textarea 
                type="text"
                required
                minLength={10}
                placeholder="minimum of ten characters"
                value={content}
                onChange={(e) => setContent(e.target.value)} ></textarea>
                <label>Blog Category: </label>
                <input 
                type="text"
                required
                placeholder="post-UTME, JAMB, ..."
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
                <label>University Name: </label>
                <input 
                type="text"
                required
                placeholder="University of Abuja"
                value={uniName}
                onChange={(e) => setUniName(e.target.value)} />

                {!isPending && <button>Create Blog!</button>}
                {isPending && <button className="disabled" disabled>Creating Blog...</button>}
            </form>
        </div>
    )
}

export default CreateBlog