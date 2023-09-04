import { useState } from "react";
import GallryCarouselImg from "./GalleryCarouselImg";
import { useEffect } from "react";

import BUTTON from "./../../../assets/forward.png";

export default function GalleryCarousel({ carouselData }) {
  const [slideNum, setSlideNum] = useState(0);
  const [translatePosition, setTranslatePosition] = useState(0);
  const [carouselSliderWidth, setCarouselSliderWidth] = useState(
    carouselData?.length * 100,
  );
  const [navigationButtonArr, setNavigationButtonArr] = useState([]);

  // PREV FUNCTION
  const prevBtn = () => {
    if (slideNum === 0) {
      return setSlideNum(carouselData?.length - 1);
    }
    return setSlideNum((prev) => (prev -= 1));
  };

  // NEXT FUNCTION
  const nextBtn = () => {
    if (slideNum === carouselData?.length - 1) {
      return setSlideNum(0);
    }
    return setSlideNum((prev) => (prev += 1));
  };

  useEffect(() => {
    setTranslatePosition(slideNum * (100 / carouselData?.length));
  }, [slideNum, carouselData?.length]);

  useEffect(() => {
    setCarouselSliderWidth(carouselData?.length * 100);
    setNavigationButtonArr(
      Array.from({ length: carouselData?.length }, (_, i) => i),
    );
  }, [carouselData?.length]);

  return (
    <div className=" relative w-full overflow-hidden ">
      {/* SLIDER */}
      <ul
        style={{
          width: `${carouselSliderWidth}%`,
          transform: `translateX(-${translatePosition}%)`,
        }}
        className=" flex h-fit duration-300 xs:gap-[.5rem] "
      >
        {carouselData.map((obj, idx) => {
          return (
            <li
              key={idx}
              className=" flex w-full smobile:gap-[1rem] mobile:gap-[2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[5rem]"
            >
              {obj.map((item, idx) => {
                return (
                  <GallryCarouselImg
                    key={idx}
                    img={item.img}
                    name={item.name}
                    idx={obj.length % (idx + 1)}
                  />
                );
              })}
            </li>
          );
        })}
      </ul>
      {/* PAGINATION */}
      <div className="mx-auto flex w-fit gap-x-3 py-4  ">
        {navigationButtonArr?.map((item, id) => {
          return (
            <span
              key={id}
              onClick={() => setSlideNum(item)}
              className={`h-2 ${
                slideNum === item
                  ? "bg-gray-600 xs:w-[3rem] mobile:w-[3rem] md:h-[.5rem] md:w-[6rem]"
                  : "w-14 bg-gray-300"
              }  h-[.3rem] rounded-full bg-[#CDCDCE] duration-300 xs:w-[.7rem] mobile:w-[1rem] md:h-[.5rem] md:w-[1.5rem]`}
            ></span>
          );
        })}
      </div>

      {/* NAVIGATION BUTTON*/}
      <div className="absolute bottom-[10%] right-0 z-20 flex w-fit gap-x-5">
        <button
          onClick={() => prevBtn()}
          className={`grid h-3 w-3 cursor-pointer place-items-center rounded-full bg-white shadow-[0_1.2863757610321045px_2.572751522064209px_0_rgba(180,180,180,0.25)] mobile:h-4 mobile:w-4 lmobile:h-6 lmobile:w-6 md:h-10 md:w-10`}
        >
          <img className="rotate-180 scale-50" src={BUTTON} alt="back" />
        </button>
        <button
          onClick={() => nextBtn()}
          className={`grid h-3 w-3 cursor-pointer place-items-center rounded-full bg-white shadow-[0_2.572751522064209px_5.145503044128418px_0_rgba(180,180,180,0.25)] mobile:h-4 mobile:w-4 lmobile:h-6 lmobile:w-6 md:h-10 md:w-10`}
        >
          <img className="scale-50" src={BUTTON} alt="back" />
        </button>
      </div>
    </div>
  );
}
