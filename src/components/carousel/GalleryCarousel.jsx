import { useState } from "react";
import TeamImg from "../common/Teamimg/TeamImg";
import { useEffect } from "react";

import BUTTON from "./../../assets/forward.png";
import Card from "../common/Card";
import Statistics from "../authUI/Stats/Statistics";
import QuickAction from "../authUI/quickAction/QuickAction";

export default function GalleryCarousel({ carouselData, type = "", Slide }) {
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
    <div className=" relative flex pt-1 pl-1 flex-col h-[100%] justify-between w-full overflow-hidden ">
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
            <div key={idx} className="w-full ">
              {/* {<Slide key={idx} content={obj} />} */}
              {type === "team" && (
                <li className=" flex w-full items-center justify-start gap-[.5rem] smobile:gap-[1rem] mobile:gap-[1.5rem] sm:gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem]">
                  {obj.map((item, idx) => {
                    return (
                      <TeamImg
                        key={idx}
                        img={item.img}
                        title={item.title}
                        name={item.name}
                        experience={item.experience}
                        idx={obj.length % (idx + 1)}
                      />
                    );
                  })}
                </li>
              )}
              {type === "card" && (
                <ul className="flex h-full w-full justify-center gap-[4%] py-[1rem] lg:gap-[6%]">
                  {obj.map((item, index) => {
                    return (
                      <Card
                        key={index}
                        header={item.header}
                        img={item.image}
                        type={"universityCard"}
                      >
                        {item.content}
                      </Card>
                    );
                  })}
                </ul>
              )}
              {type === "statistics" && <Statistics content={obj} />}
              {type === "quickAction" && <QuickAction content={obj} />}
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
      <div className="absolute bottom-[.2rem] z-50 right-[.1rem] flex w-fit gap-x-10">
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
