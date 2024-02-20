const Olevelcontent = [
  { label: "Exam type" },
  { label: "Subject" },
  { label: "Grade" },
];

export const OlevelSettingInfo = ({ id }) => {
  const numTextArr = ["First", "Second"];
  function NumberToString(num, index) {
    if (index === id) {
      return num;
    }
  }

  return (
    <div className=" flex flex-col gap-[2rem]">
      <h2 className="Text24px text-[var(--gray)]">
        {`${numTextArr.find(NumberToString)} setting`}
      </h2>
      <ul className=" flex w-full flex-col gap-[2rem] xlmobile:flex-row xlmobile:justify-between">
        {Olevelcontent.map((obj, index) => (
          <li
            key={index}
            className="flex w-[30%] items-center gap-[1rem] sm:gap-[2rem]"
          >
            <label className="  block whitespace-nowrap text-[12px] sm:text-[16px]">
              {obj.label}
            </label>
            <select className=" WCVCardHeader h-[2.3rem] min-w-[7rem] max-w-[10rem] rounded-lg py-[.2rem] pl-[1rem] ring-1 ring-[#D9DADB] xlmobile:pl-[1.5rem] sm:h-[2.8rem]">
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

function OlevelResult({
  handleOlevelSetting,
  howManyOlevelSettings,
  numOfOlevelSitting,
}) {
  return (
    <div className=" flex flex-col gap-[2rem] ">
      <h2 className=" Text24px text-center">O"Level Result</h2>
      <div className=" flex flex-col gap-[3rem]">
        <div className="flex gap-[2rem] mobile:gap-[5rem]">
          <label
            htmlFor="olevelSitting"
            className="  mr-6 block text-[12px] sm:text-[16px]"
          >
            Number of O"Level Sittings?
          </label>
          <select
            id="olevelSitting"
            onChange={(e) => handleOlevelSetting(e.target.value)}
            className="WCVCardHeader h-[2.8rem] min-w-[7rem] max-w-[10rem] rounded-lg py-[.2rem] pl-[1.5rem] ring-1 ring-[#D9DADB]"
            value={numOfOlevelSitting}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>

        {howManyOlevelSettings.map((_, index) => (
          <OlevelSettingInfo key={index} id={index} />
        ))}
      </div>
    </div>
  );
}

export default OlevelResult;
