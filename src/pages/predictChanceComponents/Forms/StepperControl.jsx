import Button from "./../../../components/common/Button";

export default function StepperControl({ currentStep, handleClick }) {
  return (
    <div className=" flex w-[100%] justify-between mobile:justify-around ">
      {/* back button */}
      <div
        onClick={() => handleClick(currentStep - 1 < 1 ? 3 : currentStep - 1)}
      >
        <Button
          addstyle={
            "bg-white ring-1 Text24px ring-[var(--blue-texture)] py-[.5rem] hover:bg-[var(--blue-texture)] hover:text-white duration-500 ease-in-out"
          }
        >
          Back
        </Button>
      </div>

      {/* next button */}
      <div
        onClick={() => handleClick(currentStep + 1 > 3 ? 1 : currentStep + 1)}
      >
        <Button
          addstyle={
            " py-[.5rem] Text24px  text-white hover:bg-white hover:text-black ring-1 ring-[var(--blue-texture)] duration-500 ease-in-out"
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
