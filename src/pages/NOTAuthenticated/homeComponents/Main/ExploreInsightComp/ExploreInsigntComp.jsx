import "./ExploreInsightComp.css";

import CARDIMG1 from "./../../../../../assets/Rectangle14.png";
// import CARDIMG2 from "./../../../../assets/Rectangle15.png";
// import CARDIMG3 from "./../../../../assets/Rectangle16.png";
import Card from "./../../../../../components/common/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllPosts } from "../../../../../redux/slice/exploreInsightSlice";

export default function ExploreInsigntComp() {
  const collectPostData = useSelector((state) => state.exploreInsight);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <section className="generalPadding flex h-fit flex-col items-center justify-center gap-[3rem] py-[5rem] text-center ">
      <h1 className=" responsiveHeader font-extrabold">Explore Our Insights</h1>

      <div className=" flex w-full">
        <ul className=" ExploreSlider flex h-full w-fit justify-start gap-[2rem] overflow-x-scroll px-3 py-[1rem] sm:justify-center md:gap-[2rem] lg:gap-[4rem] ">
          {collectPostData.status === "loading" ? (
            <p>Fetching...</p>
          ) : (
            collectPostData.data.map((obj, idx) => (
              <Card key={idx} img={CARDIMG1} header={obj.headline}>
                {obj.body}
              </Card>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
