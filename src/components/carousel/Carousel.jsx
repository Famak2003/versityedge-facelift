import React, { useEffect, useState } from "react";
import ARROWBTN from "./../../assets/forward.png";

import QUOTE from "./../../assets/quote.png";
import ColoredText from "../common/ColoredText";
import Button from "../common/Button";

const cardStackStyle = [
  " z-[2] object-contain translate-x-[8%] translate-y-[2%] scale-[105%] lmobile:scale-110 duration-300 group-hover:rotate-[-8deg] ",

  " z-[1] object-contain translate-x-[4%] translate-y-[3%] scale-[95%] lmobile:scale-[100%] duration-500 group-hover:rotate-[6deg] ",

  "z-[0] object-contain translate-x-0 translate-y-[6%] scale-[95%] lmobile:scale-[100%] duration-700 group-hover:rotate-[5deg] ",
];

const Carousel = ({ carouselData, quoteAuthor }) => {
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
    <div className="relative mx-auto flex h-[80%] w-full flex-col gap-[1rem] overflow-x-hidden mobile:gap-[2rem] md:gap-[5rem] ">
      {/* SLIDER */}
      <div
        style={{
          width: `${carouselSliderWidth}%`,
          transform: `translateX(-${translatePosition}%)`,
        }}
        className="flex transition-all duration-500 "
      >
        {/* CARDS */}
        {carouselData?.map((item, id) => {
          return (
            <div key={id} className="flex w-full">
              {/* LEFT */}
              <div className="flex basis-3/6 items-start justify-center ">
                {item.displaceImg ? (
                  <div className="group relative inline-block w-full xs:h-[18rem] mobile:h-[26rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem]">
                    {item.displaceImg.map((img, idx) => {
                      return (
                        <img
                          key={idx}
                          src={img.img}
                          alt=""
                          className={`absolute h-full ${cardStackStyle[idx]}`}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <img
                    src={item.image[0]}
                    alt=""
                    className="block object-contain"
                  />
                )}
              </div>

              {/* RIGHT */}
              <div className=" flex basis-2/3 flex-col justify-center gap-2 px-[.6rem] pt-[2rem] mobile:basis-3/6 sm:gap-5 sm:px-[2rem] sm:pt-0">
                {/* HEADER */}
                <h2 className=" SliderResponsiveHeader relative text-center font-bold">
                  {/* ColoredText  */}
                  {item.headerPaintedText ? (
                    <ColoredText
                      text={item.header}
                      colorWords={item.headerPaintedText}
                    />
                  ) : (
                    item.header
                  )}
                </h2>

                {/* PARAGRAPH */}
                <p className="KYCResponsiveText relative text-center">
                  {/* Text Quote */}
                  {item.quote && (
                    <span className=" absolute right-0 top-[-15%] z-20 h-[2vw] translate-x-[50%]">
                      <img
                        className=" h-full object-contain"
                        src={QUOTE}
                        alt="quote"
                      />
                    </span>
                  )}

                  {item.contentPaintedText ? (
                    <ColoredText
                      text={item.content}
                      colorWords={item.contentPaintedText}
                      color={item.contentColor}
                    />
                  ) : (
                    item.content
                  )}
                  {/* Text Quote */}
                  {item.quote && (
                    <span className=" absolute bottom-0 left-[-2%] h-[2vw] translate-x-[-50%]">
                      <img
                        className=" h-full rotate-180 object-contain"
                        src={QUOTE}
                        alt="quote"
                      />
                    </span>
                  )}
                </p>

                {/* QOUTE AUTHOR */}
                {quoteAuthor && (
                  <p className="KYCResponsiveText text-center font-semibold">
                    {` ~${quoteAuthor}`}
                  </p>
                )}

                {/* BUTTON */}
                {item.btnText && (
                  <div className="self-center">
                    <Button
                      path={item.path}
                      children={item.btnText}
                      addstyle="py-3 text-[#ffff] xs:text-[.5rem] smobile:text-[.7rem] mobile:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] btnText xs:py-0 mobile:py-[.2rem] sm:py-[.5rem] md:py-[.7rem]"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

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
      <div className="absolute right-[8%] top-0 z-20 flex w-fit gap-x-5">
        <button
          onClick={() => prevBtn()}
          className={`grid h-3 w-3 cursor-pointer place-items-center rounded-full bg-white shadow-[0_1.2863757610321045px_2.572751522064209px_0_rgba(180,180,180,0.25)] mobile:h-4 mobile:w-4 lmobile:h-6 lmobile:w-6 md:h-10 md:w-10`}
        >
          <img className="rotate-180 scale-50" src={ARROWBTN} alt="back" />
        </button>
        <button
          onClick={() => nextBtn()}
          className={`grid h-3 w-3 cursor-pointer place-items-center rounded-full bg-white shadow-[0_2.572751522064209px_5.145503044128418px_0_rgba(180,180,180,0.25)] mobile:h-4 mobile:w-4 lmobile:h-6 lmobile:w-6 md:h-10 md:w-10`}
        >
          <img className="scale-50" src={ARROWBTN} alt="back" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
