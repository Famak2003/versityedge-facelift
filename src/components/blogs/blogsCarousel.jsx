import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const BlogsCarousel = ({ carouselDetails }) => {
    const renderSlides =  carouselDetails.map((carouselDetail) => (
        <div key={carouselDetail.id} style={{
            backgroundImage: `url(${carouselDetail.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position : "relative",
            width : "90%",
            borderRadius : "24px",
            minHeight : "368px",
            maxHeight : "400px",
            margin : "0 5% 57px 5%"
          }} >
            <div className="hero-bg">
              <div className="hero-text">
                  {carouselDetail.text}
              </div>
              <button className="btn black hero-btn">Read More</button>
            </div>
        </div>
))
    return (
        <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showStatus={false}
        showThumbs={false}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
      
    )
  }
  
  export default BlogsCarousel 