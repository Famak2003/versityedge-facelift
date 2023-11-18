import "./ExploreInsightComp.css";

import CARDIMG1 from "./../../../../assets/Rectangle14.png";
// import CARDIMG2 from "./../../../../assets/Rectangle15.png";
// import CARDIMG3 from "./../../../../assets/Rectangle16.png";
import Card from "../../../common/Card";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllPosts } from "../../../../redux/slice/exploreInsight";

// let response;

// export const cardInfo = [
//   {
//     img: CARDIMG1,
//     header: "Navigating the Admission Process: From Application to Acceptance",
//     text: "Elevate your study game with our expert-backed guide. Learn how to harness powerful study techniques that will boost your retention, improve your focus, and pave the way to exam triumph.",
//   },
//   {
//     img: CARDIMG2,
//     header: "How to prepare Smartly for University of Lagos Post UTME Exams",
//     text: "Dive into the world of strategic exam preparation. Discover time-tested methods to conquer the Post UTME challenge, including personalized study plans and adaptive practice strategies.",
//   },
//   {
//     img: CARDIMG3,
//     header: "Mastering the Art of Effective Study Techniques for Exam Success",
//     text: "Embark on a comprehensive journey through the admissions labyrinth. Uncover the insider tips and step-by-step guidance you need to successfully navigate applications, interviews, and securing ...",
//   },
// ];

export default function ExploreInsigntComp() {
  const collectPostData = useSelector((state) => state.exploreInsight);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  // console.log(collectPostData);

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
