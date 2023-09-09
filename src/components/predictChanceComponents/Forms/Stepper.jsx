import { useEffect, useState, useRef } from "react";

export default function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, step) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.lemgth) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        },
      ),
    );

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? " flex w-full items-center"
            : "item-center flex"
        }
      >
        <div className=" relative flex flex-col items-center">
          <p
            className={` flex h-[3rem] w-[3rem] items-center justify-center rounded-full text-center  duration-500 ease-in-out ${
              step.selected ? "bg-#0A66C2 text-white" : "ring-1 ring-[#0A66C2]"
            }`}
          >
            {/* Display number */}
            {step.completed ? (
              <span className=" text-white">done</span>
            ) : (
              index + 1
            )}
          </p>
          <p
            className={` absolute top-0 mt-[4rem] w-32 ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* Display Description */}
            {step.description}
          </p>
        </div>

        <div
          className={` flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-green-600" : "border-gray-300"
          } `}
        >
          {/* Display Line */}
        </div>
      </div>
    );
  });

  return (
    <div className=" mx-[5rem] flex w-full items-center justify-between ">
      {displaySteps}
    </div>
  );
}
