import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";
import * as data from "../../../../data/index";

export function StatsComp() {
  return (
    <div className=" flex h-fit flex-col gap-[2rem] md:gap-[4rem] ">
      <h1 className=" block text-[3.6rem] font-semibold ">Hello! Israel</h1>
      <div className=" h-[90%] min-h-fit ">
        <GalleryCarousel carouselData={data.statContent} type="statistics" />
      </div>
    </div>
  );
}
