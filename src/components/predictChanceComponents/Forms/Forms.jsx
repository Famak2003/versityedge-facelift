import { useState } from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";

import DemographicsPreference from "./steps/DemographicsPreference";
import AcamedicBackground from "./steps/AcamedicBackground";
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
    <section className=" generalPadding flex flex-col items-center justify-center gap-[5rem]">
      <h1 className=" responsiveHeader font-bold">Predict Admission Chances</h1>

      {/* Stepper */}
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleClick={handleClick}
      />

      <form className=" w-full px-[3rem] pt-[3rem]">
        <label></label>
        {displayStep(currentStep)}
      </form>

      {/* Stepper control */}
      <StepperControl currentStep={currentStep} handleClick={handleClick} />
    </section>
  );
}
