import { Select } from "antd";
import { useState } from "react";

function WaecGoal() {
  const [inputNum, setInputNum] = useState(5);
  function handleAdd(e) {
    e.preventDefault();
    setInputNum(inputNum + 1);
  }
  return (
    <div className=" pb-[10rem] flex flex-col gap-[2.5rem]">
      <p className=" text-[1.8rem] text-center">
        Select your subjects and target grades
      </p>
      <form className=" h-fit">
        <ul className=" flex flex-col gap-[1.5rem] h-fit ">
          {Array.from({ length: inputNum }, (_, i) => i + 1).map((_, idx) => (
            <div key={idx} className=" flex w-full justify-between">
              <li className=" w-[60%] h-[5rem] rounded-[5rem]">
                <Select
                  className=" w-full h-full text-[1.8rem]"
                  placeholder="Subject"
                  options={[{ value: "Math" }]}
                />
              </li>
              <li className="w-[20%] h-[5rem] rounded-[50rem]">
                <Select
                  className="w-full h-full text-[1.8rem]"
                  placeholder="..."
                  options={[{ value: "AA" }]}
                />
              </li>
            </div>
          ))}
          <button
            onClick={(e) => handleAdd(e)}
            className=" self-end text-[2rem] text-[var(--blue)]"
          >
            Add +
          </button>
        </ul>
      </form>
    </div>
  );
}

export default WaecGoal;
