import { QuickAction } from "../../../../components/authUI";
import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";
import * as data from "../../../../data/index";

export function QuickActionComp() {
  return (
    <div className=" flex flex-col gap-[5rem]">
      <h1 className=" Text36px font-semibold">Quick Actions</h1>
      <GalleryCarousel
        carouselData={data.quickActionsContent}
        // type="quickAction"
        Slide={QuickAction}
      />
    </div>
  );
}
