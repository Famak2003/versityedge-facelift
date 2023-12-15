import { useReducer } from "react";
import OlevelResult from "./OlevelResult";
import SeniorScondarySchoolResult from "./SS2Result";

const Resultcontent = [
  { label: 'O"level result', name: "Olevel" },
  { label: "SS2 result", name: "SS2-Result" },
];

const initialState = {
  numOfOlevelSitting: 0,
  displayDetails: "Olevel",
  howManyOlevelSettings: [],
  secondarySchoolGrade: "",
  secondarySchoolSubject: "subject",
  listOfSecondarySchoolSubject: [],
  listOfSecondarySchoolGrade: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setNumOfOlevelSitting":
      return {
        ...state,
        numOfOlevelSitting: action.payload,
        howManyOlevelSettings: Array.from(
          { length: action.payload },
          (_, i) => i + 1,
        ),
      };
    case "setDisplayDetails":
      return {
        ...state,
        displayDetails: action.payload,
      };
    case "setListOfSecondarySchoolSubject":
      return {
        ...state,
        listOfSecondarySchoolSubject: [
          ...state.listOfSecondarySchoolSubject,
          action.payload,
        ],
      };
    case "setListOfSecondarySchoolGrade":
      return {
        ...state,
        listOfSecondarySchoolGrade: [
          ...state.listOfSecondarySchoolGrade,
          action.payload,
        ],
      };
    case "setSecondarySchoolGrade":
      return {
        ...state,
        secondarySchoolGrade: action.payload,
      };
    case "setSecondarySchoolSubject":
      return {
        ...state,
        secondarySchoolSubject: action.payload,
      };

    default:
      throw new Error("Action's Unknown");
  }
}

function AcamedicBackground() {
  const [
    {
      displayDetails,
      howManyOlevelSettings,
      numOfOlevelSitting,
      listOfSecondarySchoolSubject,
      listOfSecondarySchoolGrade,
      secondarySchoolGrade,
      secondarySchoolSubject,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // handle number of exam settings
  function handleOlevelSetting(value) {
    dispatch({ type: "setNumOfOlevelSitting", payload: value });
  }

  console.log(listOfSecondarySchoolGrade, listOfSecondarySchoolSubject);

  console.log(displayDetails);
  console.log(secondarySchoolGrade);
  console.log(secondarySchoolSubject);
  return (
    <div className=" flex flex-col gap-[3rem]">
      <p className=" responsiveHeader text-center md:leading-[3rem]">
        Your O'Level grades play a crucial role in assessing your eligibility
        for admission. Accurate and up-to-date grades will enhance the accuracy
        of our prediction and personalized recommendations.
      </p>
      <div className="flex flex-col gap-[2rem]">
        {Resultcontent.map((obj, index) => {
          return (
            <div className=" flex gap-5" key={index}>
              <label
                className=" order-2 text-[12px] sm:text-[16px]"
                htmlFor={obj.name}
              >
                {obj.label}
              </label>
              <input
                onChange={(e) =>
                  dispatch({
                    type: "setDisplayDetails",
                    payload: e.target.value,
                  })
                }
                checked={displayDetails === obj.name}
                className="order-1"
                value={obj.name}
                type="radio"
                id={obj.name}
                name="result"
              />
            </div>
          );
        })}
      </div>

      {displayDetails === "Olevel" ? (
        <OlevelResult
          handleOlevelSetting={handleOlevelSetting}
          howManyOlevelSettings={howManyOlevelSettings}
          numOfOlevelSitting={numOfOlevelSitting}
        />
      ) : (
        <SeniorScondarySchoolResult
          dispatch={dispatch}
          secondarySchoolGrade={secondarySchoolGrade}
          secondarySchoolSubject={secondarySchoolSubject}
        />
      )}
    </div>
  );
}

export default AcamedicBackground;
