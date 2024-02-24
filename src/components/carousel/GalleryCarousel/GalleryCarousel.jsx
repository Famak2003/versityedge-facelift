import "./style.css";

import { useCallback, useRef, useState } from "react";
import { useEffect } from "react";

import BUTTON from "./../../../assets/forward.png";
import useTouchSlide from "../../../hooks/useTouchSlide";

export default function GalleryCarousel({ carouselData, controlsPos, Slide }) {
  const carouselRef = useRef();
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

  // touch slide hook
  const { handleTouchStart, handleTouchMove, handleTouchEnd, direction } =
    useTouchSlide();

  // Memoized the fuctions using useCallback
  const memoizedPrevBtn = useCallback(prevBtn, [slideNum, carouselData]);
  const memoizedNextBtn = useCallback(nextBtn, [slideNum, carouselData]);

  useEffect(() => {
    if (!direction) {
      return;
    } else if (direction === "next") {
      memoizedNextBtn();
      return;
    } else if (direction === "prev") {
      memoizedPrevBtn();
      return;
    }
    // eslint-disable-next-line
  }, [direction]);

  return (
    <div className=" relative flex pt-1 pl-1 flex-col h-[100%] gap-[.2rem] ss:gap-[2rem] lmobile:justify-between w-full overflow-hidden ">
      {/* SLIDER */}
      <ul
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={(e) => handleTouchEnd(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        ref={carouselRef}
        style={{
          width: `${carouselSliderWidth}%`,
          transform: `translateX(-${translatePosition}%)`,
          scrollLeft: 300,
        }}
        className="  Carousel cursor-grab flex h-fit lmobile:h-full duration-300 xs:gap-[.5rem] "
      >
        {carouselData.map((obj, idx) => {
          return (
            <div key={idx} className=" Slide w-full ">
              {Slide ? <Slide key={idx} content={obj} /> : ""}
            </div>
          );
        })}
      </ul>
      {/* PAGINATION */}
      <div className="mx-auto mt-4 flex w-fit gap-x-3 py-4 ">
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
      <div
        className={`absolute ${
          controlsPos === "top"
            ? "top-[.2rem] right-[.1rem]"
            : " bottom-[.2rem] lmobile:right-[.1rem] translate-x-[50%] lmobile:translate-x-0 right-[50%]"
        }  z-50 flex w-fit gap-x-10`}
      >
        <button
          onClick={() => prevBtn()}
          className=" flex ring-1 ring-[var(--gray)] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_1.2863757610321045px_2.572751522064209px_0_rgba(180,180,180,0.25)] h-[4rem] w-[4rem]"
        >
          <img className=" h-[1.7rem] rotate-180 " src={BUTTON} alt="back" />
        </button>
        <button
          onClick={() => nextBtn()}
          className=" flex ring-1 ring-[var(--gray)] cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_1.2863757610321045px_2.572751522064209px_0_rgba(180,180,180,0.25)] h-[4rem] w-[4rem]"
        >
          <img className=" h-[1.7rem] " src={BUTTON} alt="back" />
        </button>
      </div>
    </div>
  );
}
