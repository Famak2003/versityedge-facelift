import Stories from "../../../../components/NotAuthUI/Stories/Stories";
import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";
import whatParentSaysContent, {
  whatParentSaysMobileContent,
} from "../../../../data/whatParentSays";
import * as Hooks from "./../../../../hooks/index";
function WhatParentsSay() {
  const data = {
    content: whatParentSaysContent,
    controlsPos: "top",
  };
  const mobileData = {
    content: whatParentSaysMobileContent,
    controlsPos: "",
  };
  const { carouselData } = Hooks.useDynamicCarouselContent(data, mobileData);

  return (
    <section className=" generalPadding flex flex-col h-fit py-[5rem] gap-[3rem] mobile:gap-[4.2rem]">
      <h1 className=" text-center ">What Parents Says About Us</h1>
      <div className=" flex justify-center items-center h-[45rem] smobile:h-[40rem] lmobile:h-[50rem] ">
        {
          <GalleryCarousel
            controlsPos={carouselData.controlsPos}
            Slide={Stories}
            carouselData={carouselData.content}
          />
        }
      </div>
    </section>
  );
}

export default WhatParentsSay;
