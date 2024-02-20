import "./Overview.css";

import { UpcomingMockAndClasses } from "./sections/UpcomingMockAndClasses";
import { QuickActionComp } from "./sections/QuickActionComp";
import { StatsComp } from "./sections/StatsComp";
import { MobileView } from "./sections/MobileView";

import { motion } from "framer-motion";
import { containerVariant } from "../../../effects";

function Overview() {
  return (
    <motion.section
      variants={containerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className=" flex justify-between gap-[2rem] "
    >
      {/* left */}
      <div className="hidden lmobile:flex flex-col gap-[9rem] w-full lmobile:w-[60%]">
        {/* // Stats for desktop - tablet // */}
        <StatsComp />
        <QuickActionComp />
      </div>

      {/* right */}
      <UpcomingMockAndClasses />

      {/* // mobile // */}
      <MobileView />
    </motion.section>
  );
}

export default Overview;
