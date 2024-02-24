// import { useEffect, useState } from "react";
import Stories from "../../../../components/NotAuthUI/Stories/Stories";
import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";
import storyContent, {
  mobileStoryContent,
} from "../../../../data/storyContent";
import * as Hooks from "./../../../../hooks/index";

function StudentStories() {
  const data = {
    content: storyContent,
    controlsPos: "top",
  };
  const mobileData = {
    content: mobileStoryContent,
    controlsPos: "",
  };
  const { carouselData } = Hooks.useDynamicCarouselContent(data, mobileData);

  return (
    <section className=" generalPadding bg-[var(--paleBlue)] flex flex-col h-fit py-[5rem] gap-[3rem] mobile:gap-[4.2rem]">
      <h1 className=" text-center ">Our Student's Stories</h1>
      <div className=" flex justify-center items-center h-[40rem] lmobile:h-[50rem]">
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

export default StudentStories;
