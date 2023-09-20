import img1 from './../../assets/blog-hero4.jpeg'
const Blog = () => {
  const blogDetail = {
    image : img1,
    postTime : 5,
    postHeader : "Navigating the Admission Process: From Application to Acceptance",
    postContent : `Annonsblockerare grexit akör dide premuren sebelt regnbågskväll. Pararade disa satsig. 
    Geomude bolundare maren dekadyck. Belose krodeligt dät och dekaligen, förutom gigarasam. 
    Tidade homogisk, och metrofili och pöpygt, lik 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati doloremque est error iusto facere ex nisi placeat labore voluptas aliquid consequatur explicabo vel, numquam expedita tempore molestias quis quasi quam voluptatem dolores maiores? Esse explicabo placeat, quam officiis mollitia asperiores soluta iusto facilis reprehenderit recusandae tempore, in velit quisquam vitae ut. Nostrum iusto, maxime perspiciatis cumque voluptates provident eum hic minus odio ea eligendi culpa, quaerat necessitatibus nisi quos saepe error maiores? Recusandae minus debitis atque quo iste excepturi vel voluptatem maiores in voluptatibus, corrupti error reprehenderit placeat sed molestiae est culpa nesciunt eos? Natus magnam odit quasi error.`,
    postComment : 1000,
    postImpressions : 2300,
    readTime : 7,
    author : "Oyebunchi Chantel",
    authorPosition : "COO, Versity Edge",
    id : 1
  }
    return (
      <div class="blog">
        <div className="blog-hero">
          <div className="blog-hero-text">
            <h2 className="blog-hero-header">{blogDetail.postHeader}</h2>
            <div className=" blog-author">
              <img src={blogDetail.image} alt="Author"/>
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
              backgroundImage : `url(${blogDetail.image})`,
            }}></div>
          </div>
        </div>
        <div className="impression-section">
          <div className="read-time">{blogDetail.readTime  < 60 ? <h6> {blogDetail.readTime} mins</h6> : <h6> {blogDetail.readTime / 60} hours</h6>}</div>
          <div className="imp">
            <h6>{blogDetail.postComment > 999 ? `${blogDetail.postComment / 1000}k` : `${blogDetail.postComment}`} comments</h6>
            <h6>{blogDetail.postImpressions > 999 ? `${blogDetail.postImpressions / 1000}k` : `${blogDetail.postImpressions}`} impressions</h6>
          </div>
        </div>
        <p className="blog-contents"> {blogDetail.postContent}</p>
      </div>
    )
  }
  
  export default Blog