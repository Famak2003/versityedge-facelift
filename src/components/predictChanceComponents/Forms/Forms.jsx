// import { useState } from "react";
// import Stepper from "./Stepper";
// import StepperControl from "./StepperControl";

// import AcamedicBackground from "./steps/AcamedicBackground";
// import DemographicsPreference from "./steps/DemographicsPreference";
// import UtmeScore from "./steps/UtmeScore";

// export default function Form() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const steps = [
//     "Demographics & preference",
//     "Academic background",
//     "Utme Score",
//   ];

//   const displayStep = (step) => {
//     switch (step) {
//       case 1:
//         return <DemographicsPreference />;
//       case 2:
//         return <AcamedicBackground />;
//       case 3:
//         return <UtmeScore />;
//       default:
//     }
//   };

//   return (
//     <section className=" generalPadding flex flex-col items-center justify-center gap-[3rem]">
//       <h1 className=" responsiveHeader font-bold">Predict Admission Chances</h1>

//       {/* Stepper */}
//       <Stepper steps={steps} currentStep={currentStep} />

//       <form>
//         <label></label>
//         <input placeholder="hhdhd" />
//       </form>

//       {/* Stepper control */}
//       <StepperControl />
//     </section>
//   );
// }
