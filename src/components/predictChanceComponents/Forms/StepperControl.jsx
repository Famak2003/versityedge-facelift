import Button from "../../common/Button";

export default function StepperControl() {
  return (
    <div className=" container flex justify-around ">
      {/* back button */}
      <Button
        addstyle={
          "bg-white ring-1 ring-[#0A66C2] py-[.5rem] hover:bg-[#0A66C2] hover:text-white duration-500 ease-in-out"
        }
      >
        Back
      </Button>

      {/* next button */}
      <Button
        addstyle={
          " py-[.5rem] text-white hover:bg-white hover:text-black ring-1 ring-[#0A66C2] duration-500 ease-in-out"
        }
      >
        Next
      </Button>
    </div>
  );
}
