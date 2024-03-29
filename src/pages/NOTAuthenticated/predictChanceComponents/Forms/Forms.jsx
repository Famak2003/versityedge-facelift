import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

import DemographicsPreference from "./steps/DemographicsPreference";
import AcamedicBackground from "./steps/AcademicBackground/AcamedicBackground";
import UtmeScore from "./steps/UtmeScore";

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Demographics & preference",
    "Academic background",
    "Utme Score",
  ];

  function handleClick(index) {
    setCurrentStep(index);
  }

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <DemographicsPreference />;
      case 2:
        return <AcamedicBackground />;
      case 3:
        return <UtmeScore />;
      default:
    }
  };

  return (
    <section className=" generalPadding flex flex-col items-center justify-center gap-[2rem] mobile:gap-[5rem]">
      <h1 className=" responsiveHeader font-bold">Predict Admission Chances</h1>

      {/* Stepper */}
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleClick={handleClick}
      />

      <form className=" mb-[5rem] w-full px-[2rem] mobile:px-[3rem] mobile:pt-[3rem]">
        {displayStep(currentStep)}
      </form>

      {/* Stepper control */}
      <div className=" w-[100%]">
        <StepperControl currentStep={currentStep} handleClick={handleClick} />
      </div>
    </section>
  );
}
