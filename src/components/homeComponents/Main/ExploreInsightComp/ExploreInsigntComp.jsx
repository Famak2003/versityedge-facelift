import "./ExploreInsightComp.css";

import CARDIMG1 from "./../../../../assets/Rectangle14.png";
import CARDIMG2 from "./../../../../assets/Rectangle15.png";
import CARDIMG3 from "./../../../../assets/Rectangle16.png";
import Card from "../../../common/Card";
// import useFetch from "../../../useFetch/useFetch";

// let response;

export const cardInfo = [
  {
    img: CARDIMG1,
    header: "Navigating the Admission Process: From Application to Acceptance",
    text: "Elevate your study game with our expert-backed guide. Learn how to harness powerful study techniques that will boost your retention, improve your focus, and pave the way to exam triumph.",
  },
  {
    img: CARDIMG2,
    header: "How to prepare Smartly for University of Lagos Post UTME Exams",
    text: "Dive into the world of strategic exam preparation. Discover time-tested methods to conquer the Post UTME challenge, including personalized study plans and adaptive practice strategies.",
  },
  {
    img: CARDIMG3,
    header: "Mastering the Art of Effective Study Techniques for Exam Success",
    text: "Embark on a comprehensive journey through the admissions labyrinth. Uncover the insider tips and step-by-step guidance you need to successfully navigate applications, interviews, and securing ...",
  },
];

export default function ExploreInsigntComp() {
  // const data = {
  //   header: "How to prepare Smartly for University of Lagos Post UTME Exams",
  //   topic: "Dive into the world of strategic exam preparation.",
  //   body: "Discover time-tested methods to conquer the Post UTME challenge, including personalised study plans and adaptive practice strategies.",
  //   tag: "UTME",
  //   img_url: CARDIMG3,
  //   cta: "Read More",
  //   seo_description: "Effective Post UTME exam preparation tips.",
  //   is_reviewed: true,
  //   is_published: true,
  //   memberId: "0001",
  //   blogCategoryId: "UTME",
  // };

  // // Convert the data to a JSON string
  // const jsonData = JSON.stringify(data);

  // // Make the POST request
  // fetch("https://api.versityedge.com/v1", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: jsonData,
  // })
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     console.log("Response:", responseData);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  // const data2 = {
  //   name: "UTME",
  //   description: "Post utme process",
  // };

  // const jsonData = JSON.stringify(data2);

  // fetch("https://api.versityedge.com/v1", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: jsonData,
  // })
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error("Failed to post data");
  //     }
  //     return res.json();
  //   })
  //   .then((responseData) => {
  //     console.log(responseData);
  //   })
  //   .catch((err) => {
  //     console.error(err.message);
  //   });

  // response = useFetch("https://api.versityedge.com/v1");

  // console.log(response.data);
  return (
    <section className="generalPadding flex h-fit flex-col items-center justify-center gap-[3rem] py-[5rem] text-center ">
      <h1 className=" responsiveHeader font-extrabold">Explore Our Insights</h1>

      <div className=" flex w-full">
        <ul className=" ExploreSlider flex h-full w-fit justify-start gap-[2rem] overflow-x-scroll px-3 py-[1rem] sm:justify-center md:gap-[2rem] lg:gap-[4rem] ">
          {cardInfo.map((obj, id) => (
            <Card key={id} img={obj.img} header={obj.header}>
              {obj.text}
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
