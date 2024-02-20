import "./GridSelection.css";

import { motion } from "framer-motion";
import { selectionVariant, glowVariant } from "./../../../effects";

import * as Hooks from "./../../../hooks/index";
import * as Components from "./../../../components/common/index";

import JAMB from "./../../../assets/jamb.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GridSelection({
  addFilter = false,
  header = "Won't you add an header?🧐 ",
  nextButtonPath,
  buttonText = "Next",
  dataSelection = "single",
  callBack,
}) {
  const [examChoice, setExamChoice] = useState([]);

  const nav = Hooks.useNav();
  const navigate = useNavigate();

  function handleNext() {
    callBack?.(examChoice);
    console.log(examChoice);
    if (nextButtonPath.includes("/")) {
      console.log("a route dectected");
      navigate(nextButtonPath);
      return;
    }
    nav(nextButtonPath);
  }

  function handleExamChoice(value) {
    let newValue;
    if (dataSelection === "single") {
      setExamChoice([value]);
    } else if (!examChoice.includes(value)) {
      setExamChoice((data) => [...data, value]);
    } else {
      newValue = examChoice.filter((item) => item !== value);
      setExamChoice(newValue);
    }
    // console.log(examChoice);
  }

  return (
    <div className=" h-full flex flex-col gap-[2rem]">
      {/* // header // */}
      <h1 className=" font-semibold text-center mb-2 text-[2.4rem]">
        {header}
      </h1>
      {/* // body // */}
      <Components.Search addFilter={addFilter} />
      <ul className="selection">
        {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
          <li
            key={num}
            className={`flex flex-col gap-1 justify-center items-center `}
          >
            <motion.figure
              variants={selectionVariant}
              whileHover={"hoverEffect"}
              whileTap={"clickEffect"}
              onClick={() => handleExamChoice(num)}
              className={` ${
                examChoice.includes(num)
                  ? "ring-2 ring-[var(--blue)]"
                  : "ring-[var(--lightgray)] ring-1"
              }  rounded-2xl min-w-[8.8rem] max-w-[15.8rem] min-h-[9.8rem] max-h-[17.4rem]`}
            >
              <img className="h-full w-full" src={JAMB} alt="exam-type" />
            </motion.figure>
            <p
              className={` ${
                examChoice.includes(num)
                  ? "text-[var(--blue)] font-semibold"
                  : "text-[var(--black)]"
              }  text-[1.2rem]`}
            >
              JAMB
            </p>
          </li>
        ))}
      </ul>
      <motion.button
        variants={glowVariant}
        whileHover={"hoverEffect"}
        onClick={() => handleNext()}
        className="fixed xs:w-[95vw] max-w-[52rem] self-center bottom-4 active:bg-[var(--blue)] active:text-[var(--white)] bg-[var(--white)] mt-[1rem] ring-1 ring-[var(--blue)] rounded-3xl text-[1.8rem] h-[4.7rem] "
      >
        {buttonText}
      </motion.button>
    </div>
  );
}

export default GridSelection;
