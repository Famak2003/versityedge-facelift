import * as Hooks from "../../../../../hooks/index";
import { useSelector } from "react-redux";

import JambGoals from "./JambGoals";
import WaecGoal from "./WaecGoal";
import PostUTMEGoal from "./PostUTMEGoal";

function Goals() {
  const nav = Hooks.useNav();
  const examType = useSelector((state) => state.auth.examType);

  function handleSubmit() {
    nav("subjectCombination");
  }

  function content(goal) {
    switch (goal) {
      case 1:
        return <JambGoals />;
      case 2:
        return <WaecGoal />;
      case 3:
        return <PostUTMEGoal />;
      default:
        return <JambGoals />;
    }
  }

  return (
    <div className=" flex flex-col gap-[3rem] ">
      <h1 className=" text-[2.4rem] text-center px-[10%]">
        Let's know what your goals are?
      </h1>
      {content(examType)}
      <button
        onClick={() => handleSubmit()}
        className=" max-w-[52rem] self-center fixed text-[var(--white)] bottom-4 active:text-[var(--black)] bg-[var(--blue)] mt-[1rem] rounded-3xl text-[1.8rem] h-[4.7rem] w-[95vw]"
      >
        Next
      </button>
    </div>
  );
}

export default Goals;
