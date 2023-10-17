import { useReducer } from "react";

const Resultcontent = [
  { label: 'O"level result', name: "Olevel" },
  { label: "SS2 result", name: "SS2-Result" },
];

const Olevelcontent = [
  { label: "Exam type" },
  { label: "Subject" },
  { label: "Grade" },
];

function handleChange(e) {
  console.log(e.target.value);
}

const Result = ({ label, name }) => (
  <div className=" flex gap-5">
    <label className=" order-2 text-[12px] sm:text-[16px]" htmlFor="Olevel">
      {label}
    </label>
    <input
      onChange={(e) => handleChange(e)}
      className="order-1"
      value={name}
      type="radio"
      id={name}
      name={name}
    />
  </div>
);

const OlevelSettingInfo = ({ id }) => {
  const numTextArr = ["First", "Second", "Third", "Fourth", "Fifth"];
  function NumberToString(num, index) {
    if (index === id) {
      return num;
    }
  }

  return (
    <div className=" flex flex-col gap-[2rem]">
      <h2 className="Text24px text-[var(--gray-texture)]">
        {`${numTextArr.find(NumberToString)} setting`}
      </h2>
      <ul className=" flex  justify-between">
        {Olevelcontent.map((obj, index) => (
          <li
            key={index}
            className="flex w-[30%] items-center gap-[1rem] sm:gap-[2rem]"
          >
            <label className="  block whitespace-nowrap text-[12px] sm:text-[16px]">
              {obj.label}
            </label>
            <select className=" h-[2.3rem] min-w-[7rem] max-w-[10rem] rounded-lg py-[.2rem] pl-[1.5rem] ring-1 ring-[#D9DADB] sm:h-[2.8rem]">
              <option disabled>Please Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

const initialState = {
  numOfOlevel: 1,
  howManySettings: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setNumOfOlevel":
      return {
        ...state,
        numOfOlevel: action.payload,
        howManySettings: Array.from(
          { length: action.payload },
          (_, i) => i + 1,
        ),
      };
    default:
      throw new Error("Action's Unknown");
  }
}

function AcamedicBackground() {
  // const [numOfOlevel, setNumOfOlevel] = useState(1);
  // const [howManySettings, setHowManySettings] = useState([]);

  const [{ howManySettings, numOfOlevel }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  // handle number of exam settings
  function handleSettingNum(value) {
    dispatch({ type: "setNumOfOlevel", payload: value });
  }

  return (
    <div className=" flex flex-col gap-[3rem]">
      <p className=" Text24px text-center md:leading-[3rem]">
        Your O'Level grades play a crucial role in assessing your eligibility
        for admission. Accurate and up-to-date grades will enhance the accuracy
        of our prediction and personalized recommendations.
      </p>
      <div className="flex flex-col gap-[2rem]">
        {Resultcontent.map((obj, index) => {
          return <Result key={index} label={obj.label} name={obj.name} />;
        })}
      </div>

      <h2 className=" Text24px text-center">O"Level Result</h2>
      <div className=" flex flex-col gap-[3rem]">
        <div className="flex gap-[5rem]">
          <label className="  mr-6 block text-[12px] sm:text-[16px]">
            Number of O"Level Sittings?
          </label>
          <select
            onChange={(e) => handleSettingNum(e.target.value)}
            className="h-[2.8rem] w-[30%] rounded-lg py-[.2rem] pl-[1.5rem] ring-1 ring-[#D9DADB]"
            value={numOfOlevel}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        {howManySettings.map((num, index) => (
          <OlevelSettingInfo key={index} id={index} />
        ))}
      </div>
    </div>
  );
}

export default AcamedicBackground;
