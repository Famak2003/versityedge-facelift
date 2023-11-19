import { useEffect, useState, useRef } from "react";

export default function Stepper({ steps, currentStep, handleClick }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, step) => {
    const newSteps = [...step];
    let count = 0;

    while (count < newSteps.length) {
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
            onClick={() => handleClick(index + 1)}
            className={` flex h-[3rem] w-[3rem] items-center justify-center rounded-full text-center  ring-1 ring-[#0A66C2] duration-500 ease-in-out
            ${
              step.highlighted
                ? "bg-[var(--blue-texture)] text-white"
                : "bg-transparent text-[var(--blue-texture)]"
            }
            ${
              step.completed
                ? "bg-[var(--blue-texture)] text-[var-(--blue-texture)]"
                : "bg-transparent"
            }`}
          >
            {/* Display number */}
            {index + 1}
          </p>
          <p
            className={` absolute top-0 mt-[4rem] w-fit whitespace-nowrap ${
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
    <div className=" mx-[5rem] flex w-[75%] items-center justify-between sm:w-[70%] lg:w-[50%] ">
      {displaySteps}
    </div>
  );
}
