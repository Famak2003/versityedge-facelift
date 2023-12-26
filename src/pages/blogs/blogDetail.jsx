import useFetch from '../../components/useFetch/useFetch';
// import img1 from './../../assets/blog-hero4.jpeg'
import Comments from './comments'
import { Link, useNavigate, useParams } from "react-router-dom"
const Blog = () => {
  const {id}  = useParams();
  const {date: blogDetail, isPending, error} = useFetch("https://versityedge1.eastus.cloudapp.azure.com/v1/blog/post/" + id)
  // const handleDelete = () => {
  //   fetch("http://versityedge1.eastus.cloudapp.azure.com/v1/blog/posts/" + blogDetail.id , {
  //     method : "DELETE"
  //   }).then(() => {
  //     navigate("/blogs")
  //   })
  // }
  const navigate = useNavigate()
    return (
         <div className="blogDetail">
        {error && <div> {error} </div>}
        {isPending && <div> Fetching Blog ... </div>}
        {blogDetail && (
          <div className="blog">
            <div className="blog-hero">
            <div className="blog-hero-text">
              <h2 className="blog-hero-header">{blogDetail.headline}</h2>
              <div className=" blog-author">
                <img src={blogDetail.img_url} alt="Author"/>
                <div className="">
                  <h5>{blogDetail.author}</h5>
                  <h6>{blogDetail.authorPosition ? blogDetail.authorPosition : "Author"}</h6>
                </div>
              </div>
            </div>
            <div className='blog-hero-imgs'>
              <div className="blog-img img-12-deg" style={{
                backgroundImage : `url(${blogDetail.image})`,
              }}></div>
              <div className="blog-img img-6-deg" style={{
                backgroundImage : `url(${blogDetail.image})`,
              }}></div>
              <div className="blog-img img-0-deg" style={{
                backgroundImage : `url(${blogDetail.image}) `,
              }}></div>
            </div>
          </div>
          <div className="impression-readTime-section">
              <h6>{blogDetail.readTime > 59 ? `${blogDetail.readTime / 60} hours` : `${blogDetail.readTime} mins`} read</h6>
          <div className="impressions-section">
              <h6>{blogDetail.postComment > 999 ? `${blogDetail.postComment / 1000}k` : `${blogDetail.postComment}`} comments</h6>
              <h6>{blogDetail.postImpressions > 999 ? `${blogDetail.postImpressions / 1000}k` : `${blogDetail.postImpressions}`} impressions</h6>
              <button className='share-btn'>share</button>
          </div>
          </div>
          <p className="blog-contents">{blogDetail.postContent}</p>
          <Comments />
          <div className="btn-div">
            <Link to="/blogs" className="go-back-btn right">Go back</Link>
          </div>
          </div>
        )}
      </div>
       );
};

export default Blog;
