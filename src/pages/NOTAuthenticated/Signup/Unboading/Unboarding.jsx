import BACK from "./../../../../assets/back-icon.png";
import * as Hooks from "../../../../hooks/index";
import { useSelector } from "react-redux";
import PersonalInfo from "./Pages/PersonalInfo";
import ExamType from "./Pages/ExamType";
import ExamOverview from "./Pages/ExamOverview/ExamOverview";
import Goals from "./Pages/Goals";
import JambCombination from "./Pages/JambCombination";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

function Unboarding() {
  // const dispatch = useDispatch();
  const nav = Hooks.useNav();
  const [slide, setSlide] = useState(1);
  // const navigate = useNavigate();
  const currentPage = useSelector((state) => state.auth.currentUnboardingPage);

  // async function handleNext() {
  //   switch (currentPage) {
  //     case "personalInfo":
  //       await nav("examType");
  //       break;
  //     case "examType":
  //       nav("examOverview");
  //       break;
  //     case "examOverview":
  //       nav("goals");
  //       break;
  //     case "goals":
  //       nav("subjectCombination");
  //       break;
  //     case "subjectCombination":
  //       navigate("/dashboard");
  //       break;
  //     default:
  //       toast("Error in rendering unboarding page");
  //       break;
  //   }
  // }

  function handleBack() {
    switch (currentPage) {
      case "examType":
        nav("personalInfo");
        break;
      case "examOverview":
        nav("examType");
        break;
      case "goals":
        nav("examOverview");
        break;
      case "subjectCombination":
        nav("goals");
        break;
      default:
        toast("There was an error while navigating");
        break;
    }
  }

  function pageContent(page) {
    console.log(page);
    switch (page) {
      case "personalInfo":
        return <PersonalInfo />;
      case "examType":
        return <ExamType />;
      case "examOverview":
        return <ExamOverview />;
      case "goals":
        return <Goals />;
      case "subjectCombination":
        return <JambCombination />;
      default:
        return <PersonalInfo />;
    }
  }

  const slideStyle = {
    present: "w-[3rem] h-[3rem] bg-[var(--blue)] rounded-full",
    next: " w-[2rem] h-[2rem] bg-[var(--gray)] rounded-full ",
    compNext: " w-[2rem] h-[2rem] bg-[var(--blue)] rounded-full ",
    prev: " w-[1rem] h-[1rem] bg-[var(--gray)] rounded-full",
    compPrev: " w-[1rem] h-[1rem] bg-[var(--blue)] rounded-full",
  };

  const checkSlide = (num) => {
    if (slide === num) {
      return slideStyle.present;
    } else if (num === 1 && slide > num) {
      return slideStyle.compPrev;
    } else if (num === 2 && slide > num) {
      return slideStyle.compNext;
    } else if (slide + 1 === num) {
      return slideStyle.next;
    } else if (slide + 1 < num) {
      return slideStyle.prev;
    }
    //  else {
    //   return slideStyle.prev;
    // }
  };

  useEffect(() => {
    if (currentPage === "personalInfo") {
      setSlide(1);
    } else if (currentPage === "examType") {
      setSlide(2);
    } else {
      setSlide(3);
    }
  }, [setSlide, currentPage]);
  return (
    <section className="flex pb-[2rem] justify-center items-center">
      <div className=" xs:w-[100vw] max-w-[55rem] mobile:min-w-[30rem] flex gap-[2rem] pt-[4rem] px-[2rem] pb-[5rem] flex-col">
        {currentPage === "personalInfo" ? (
          ""
        ) : (
          <button className=" self-start" onClick={() => handleBack()}>
            <img src={BACK} alt="back" />
          </button>
        )}
        <ul className=" flex gap-[.5rem] justify-center items-center h-fit">
          <li className={`${checkSlide(1)}`}></li>
          <li className={`${checkSlide(2)}`}></li>
          <li className={`${checkSlide(3)}`}></li>
        </ul>

        {pageContent(currentPage)}
      </div>
    </section>
  );
}

export default Unboarding;
