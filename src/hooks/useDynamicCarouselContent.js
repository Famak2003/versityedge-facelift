import { useEffect, useState } from "react";

// This hooks function is to change carousel-content based on the screen size in this case 500px and lower
function useDynamicCarouselContent(data, mobileData) {
  const [carouselData, setCarouselData] = useState({
    content: data.content,
    controlsPos: data.controlsPos,
  });

  // Function to fetch and set carousel data

  useEffect(() => {
    // Function to handle media query change
    const handleMediaQueryChange = (mediaQueryList) => {
      if (mediaQueryList.matches) {
        // Media query matches (screen width <= 500px), get new carousel data
        setCarouselData({
          content: mobileData.content,
          controlsPos: mobileData.controlsPos,
        });
      }
    };

    // Create a media query list for screen width <= 500px
    const mediaQueryList = window.matchMedia("(max-width: 500px)");

    // Check initial media query status
    handleMediaQueryChange(mediaQueryList);

    // Add event listener for media query change
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    // Clean up function
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
    // eslint-disable-next-line
  }, []);

  return { carouselData };
}

export default useDynamicCarouselContent;
