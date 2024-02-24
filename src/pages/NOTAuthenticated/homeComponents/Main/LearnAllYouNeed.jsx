import { LearnAll } from "../../../../components/NotAuthUI";
import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";
import learnAllContent, {
  learnAllMobileContent,
} from "../../../../data/learnAllContent";

import * as Hooks from "./../../../../hooks/index";

function LearnAllYouNeed() {
  const data = {
    content: learnAllContent,
    controlsPos: "",
  };
  const mobileData = {
    content: learnAllMobileContent,
    controlsPos: "",
  };
  const { carouselData } = Hooks.useDynamicCarouselContent(data, mobileData);
  return (
    <section className=" generalPadding py-[5rem] flex flex-col gap-[5rem]">
      <h1 className=" text-center">
        Learn All You Need To Secure An Admission
      </h1>
      <div className=" ring-1 h-[40rem] mobile:h-[53rem] lmobile:h-fit ">
        <GalleryCarousel carouselData={carouselData.content} Slide={LearnAll} />
      </div>
    </section>
  );
}

export default LearnAllYouNeed;
