export default function SeniorScondarySchoolResult({
  dispatch,
  secondarySchoolGrade,
  secondarySchoolSubject,
}) {
  return (
    <div className=" flex flex-col gap-[2rem]">
      <h2 className=" Text24px text-center">SS2 Result</h2>
      <p>
        Please note: If you scored between 75-100%(grade is A1), 70-74%(grade is
        B), 65-69(grade is B3), 60-64(grade is C4), 55-59%(grade is C5),
        50-54%(grade is C6), 45-49%(grade is D7), 40-44%(grade is E8),
        0-39%(grade is F9)
      </p>

      <div>
        <div>
          <label htmlFor="subject"> Choose subject </label>
          <select
            id="subject"
            value={secondarySchoolSubject}
            onChange={(e) =>
              dispatch({
                type: "setSecondarySchoolSubject",
                payload: e.target.value,
              })
            }
            className="h-[2.8rem] w-[30%] rounded-lg py-[.2rem] pl-[1.5rem] ring-1 ring-[#D9DADB]"
          >
            <option value={"subject"} disabled hidden>
              Subject
            </option>
            <option value={"english"}> English </option>
            <option value={"math"}> Math</option>
            <option value={"physics"}> Physics </option>
            <option value={"chemistry"}> Chemistry </option>
          </select>
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <select
            id="grade"
            className="h-[2.8rem] w-[30%] rounded-lg py-[.2rem] pl-[1.5rem] ring-1 ring-[#D9DADB]"
            value={secondarySchoolGrade}
            onChange={(e) =>
              dispatch({
                type: "setSecondarySchoolGrade",
                payload: e.target.value,
              })
            }
          >
            <option value={"A"}> A </option>
            <option value={"B"}> B </option>
            <option value={"C"}> C </option>
            <option value={"D"}> D </option>
          </select>
        </div>
      </div>
    </div>
  );
}
