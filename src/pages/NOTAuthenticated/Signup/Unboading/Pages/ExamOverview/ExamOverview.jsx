import "./ExamOverview.css";

import { ColoredText } from "../../../../../../components/common";
import JAMB from "./../../../../../../assets/large-jamb.png";

import * as Hooks from "../../../../../../hooks/index";
import { useSelector } from "react-redux";

function ExamOverview() {
  const examType = useSelector((state) => state.auth.examType);
  const nav = Hooks.useNav();

  function handleSubmit() {
    nav("goals");
  }

  console.log(examType);
  return (
    <section className=" generalPadding flex pt-[5rem] pb-[10rem] h-[100vh] flex-col gap-[4rem]">
      <h1 className=" text-center font-semibold px-[10%] text-[2.4rem]">
        Overview of the tutoring program
      </h1>
      <figure className=" pb-[12rem] flex flex-col gap-[5rem] py-[2rem] justify-center items-center h-fit ">
        <div className="h-[20rem]">
          <img className="h-full object-contain" src={JAMB} alt="exam-choice" />
        </div>
        <figcaption className=" writeUp text-center h-[10rem] w-[30.2rem] text-[1.8rem]">
          {
            <ColoredText
              text={
                " We would help you in preparing for your upcoming UTME exam by giving you access to qualified tutors with experience   Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              }
              colorWords={"UTME"}
            />
          }
        </figcaption>
      </figure>
      <button
        onClick={(e) => handleSubmit(e)}
        className=" xs:w-[95vw] max-w-[52rem] self-center fixed text-[var(--white)] bottom-4 active:text-[var(--black)] bg-[var(--blue)] mt-[1rem] rounded-3xl text-[1.8rem] h-[4.7rem]"
      >
        Next
      </button>
    </section>
  );
}

export default ExamOverview;
