import GalleryCarousel from "../../../../components/carousel/GalleryCarousel/GalleryCarousel";

import webEventContent from "../../../../data/webEventsContent";

import TextnImageDisplay from "../../../../components/NotAuthUI/TextnImageDisplay";

function WebinarAndEvents() {
  return (
    <section className=" flex flex-col gap-[5rem] bg-[var(--paleBlue)] generalPadding py-[5rem]">
      <h1 className=" text-center ">Upcoming Events and Webinar</h1>
      <div className=" h-[68rem] smobile:h-[73rem] mobile:h-[80rem] lmobile:h-full">
        <GalleryCarousel
          Slide={TextnImageDisplay}
          carouselData={webEventContent}
        />
      </div>
    </section>
  );
}

export default WebinarAndEvents;
