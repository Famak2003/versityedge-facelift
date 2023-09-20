import BlogsCarousel from "./blogsCarousel";
import ImgHero1 from '../../assets/blog-hero1.jpeg'
import ImgHero2 from '../../assets/blog-hero2.jpeg'
import ImgHero3 from '../../assets/blogPopular3.png'
import ImgHero4 from '../../assets/blog-hero4.jpeg'
import AdmissionTip from "./admissionTips";
import './blogs.css'
import PopularNews from "./popular";
import HotNews from "./hotposts";



const Blogs = () => {
    const carouselDetails = [
        {
            image : ImgHero1,
            text : "Welcome to VersityEdge's Blog, your go-to source for empowering insights, tips, and success stories that will propel you towards admission triumph.",
            id : 1
        },
        {
            image : ImgHero2,
            text : "Whether you're striving for admission to your dream institution or seeking to excel in your studies, our blog is your compass to excellence.",
            id : 2
        },
        {
            image : ImgHero3,
            text : "Discover proven strategies, personalized advice, and inspiring narratives that will fuel your determination and drive.",
            id : 3
        },
        {
            image : ImgHero4,
            text : "Our expertly crafted articles are designed to guide you through every step of your academic journey, from acing exams to securing coveted admissions",
            id : 4
        }
    ]
  return (
    <div className="blogs" style={{
        
    }}>
        <BlogsCarousel carouselDetails={carouselDetails} />
        <HotNews />
        <PopularNews />
        <AdmissionTip />
    </div>
  )
}

export default Blogs