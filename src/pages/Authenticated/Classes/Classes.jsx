import { useState } from "react";
import { Completed } from "./sections/Completed";
import { Missed } from "./sections/Missed";
import { Upcoming } from "./sections/Upcoming";
import { Live } from "./sections/Live";
import { All } from "./sections/All";
import { Calendar } from "antd";

import { motion } from "framer-motion";
import { containerVariant } from "../../../effects";

const classesOption = ["All", "Live", "Upcoming", "Missed", "Completed"];

function inView(view) {
  switch (view) {
    case 0:
      return <All />;
    case 1:
      return <Live />;
    case 2:
      return <Upcoming />;
    case 3:
      return <Missed />;
    case 4:
      return <Completed />;
    default:
      return <All />;
  }
}
function Classes() {
  const [presentView, setPresentView] = useState(0);

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYY-MM-DD"), mode);
  };

  function handleClick(value) {
    setPresentView(value);
  }

  return (
    <motion.section
      variants={containerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="  flex w-full justify-between gap-[2rem] md:gap-[5rem] "
    >
      <div className="DisableScrollBar w-full lmobile:w-[55%] sm:w-[60%] flex flex-col gap-[4rem] px-[2.4rem] py-[1rem] lmobile:py-[4.5rem] rounded-2xl h-full lmobile:h-[63.2rem] overflow-scroll shadow-[0px_5px_10px_0px_rgba(176,176,176,0.25)]">
        <ul className=" flex justify-between gap-[.7rem] w-full">
          {classesOption.map((value, idx) => (
            <li
              className={` text-[1.2rem] mobile:text-[1.6rem] sm:text-[2rem] md:text-[2.2rem] ${
                presentView === idx && "text-[var(--blue)]"
              }`}
              onClick={() => handleClick(idx)}
              key={idx}
            >
              {value}
            </li>
          ))}
        </ul>
        {inView(presentView)}
      </div>
      <div className=" hidden lmobile:flex relative justify-start items-start p-0 w-[45%] sm:w-[40%] h-[43rem] md:h-fit rounded-3xl shadow-[0px_5px_10px_0px_rgba(176,176,176,0.25)] ">
        <Calendar
          className=" absolute scale-[65%] top-[-4rem] left-[-6.5rem] ssm:left-[-6rem] sm:top-[-1rem] sm:left-[-4rem] sm:scale-[75%] md:static m-0 p-0 md:scale-[86%] Lmd:scale-[100%] w-fit h-fit"
          fullscreen={false}
          onPanelChange={onPanelChange}
          // cellRender={}
        />
      </div>
    </motion.section>
  );
}

export default Classes;
