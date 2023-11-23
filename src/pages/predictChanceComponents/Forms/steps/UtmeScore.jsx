import { useState } from "react";
import Years from "../Year";

function UtmeScore() {
  const [attempts, setAttemps] = useState(1);
  const [utme, setUtme] = useState([]);
  const [years, setYears] = useState([]);
  const [utmeDataObj, setUtmeDataObj] = useState({});
  const [yearDataObj, setYearDataObj] = useState({});
  let numAttempts = Array.from({ length: attempts - 1 }, (_, i) => i + 1);

  console.log(utmeDataObj);
  console.log(yearDataObj);

  // console.log(numAttempts[attempts]);
  // useEffect(function(){

  // }, [years, utme, attempts])
  return (
    <div className=" flex flex-col gap-[.5rem] mobile:gap-[1rem] sm:gap-[1.5rem] md:gap-[3rem]">
      <p className=" Text24px text-center">
        Please provide your UTME score for the most recent exam you have taken,
        along with any previous UTME scores if applicable.
      </p>
      <ul className=" ">
        <li className=" list-disc">
          <div className=" flex items-center gap-5">
            <label className=" Text24px" htmlFor="UTMEAttemps">
              Number of UTME attempts
            </label>
            <select
              onChange={(e) => setAttemps(e.target.value)}
              value={attempts}
              name="UTMEAttemps"
              id="UTMEAttemps"
              className="WCVCardHeader h-[2.8rem] w-[5rem] rounded-lg px-[1rem] ring-1 ring-[var(--gray-texture)]"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
        </li>
      </ul>
      <div className=" flex flex-col gap-[.5rem] mobile:gap-[1rem] sm:gap-[1.5rem] ">
        <UtmeAttempts
          idx={0}
          setUtme={setUtme}
          setYears={setYears}
          utme={utme}
          years={years}
          setYearDataObjSetter={setYearDataObj}
          setUtmeDataObjSetter={setUtmeDataObj}
        />
        <p className=" responsiveHeader text-[var(--gray-texture)]">
          Other Settings
        </p>
        <div className=" flex flex-col gap-[3rem] smobile:gap-[.5rem] mobile:gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem]">
          {numAttempts.map((_, index) => {
            return (
              <UtmeAttempts
                setUtme={setUtme}
                utme={utme}
                years={years}
                setYears={setYears}
                idx={index + 1}
                key={index}
                setUtmeDataObjSetter={setUtmeDataObj}
                setYearDataObjSetter={setYearDataObj}
              />
            );
          })}
        </div>
        {/* {console.log(utme, years)} */}
      </div>
    </div>
  );
}

const UtmeAttempts = ({
  setUtme,
  setYears,
  utme,
  years,
  idx,
  setUtmeDataObjSetter,
  setYearDataObjSetter,
}) => {
  return (
    <div className=" flex flex-col gap-[1rem] smobile:flex-row smobile:items-center smobile:gap-[2rem] mobile:gap-[5rem]">
      <div className="flex gap-[1rem]">
        <label className="Text24px">Utme Score</label>{" "}
        <input
          id={idx}
          onChange={(e) => {
            setUtme(() => [...utme, (utme[idx] = e.target.value)]);
            setUtmeDataObjSetter((prev) => {
              return {
                ...prev,
                [e.target.id]: e.target.value,
              };
            });
          }}
          className=" WCVCardHeader h-[2.8rem] w-[5rem] rounded-lg px-[1rem] ring-1 ring-[var(--gray-texture)]"
          placeholder="..."
        />
      </div>
      <div className=" flex gap-[1rem]">
        <label className="Text24px">Year</label>
        <select
          id={idx}
          onChange={(e) => {
            console.log(e.target.id);
            setYearDataObjSetter((prev) => {
              return {
                ...prev,
                [e.target.id]: e.target.value,
              };
            });
            setYears(() => [...years, (years[idx] = e.target.value)]);
          }}
          className=" WCVCardHeader h-[2.8rem] w-[7rem]  rounded-lg pl-[.5rem] ring-1 ring-[var(--gray-texture)]"
        >
          {Years().map((yr, index) => {
            return (
              <option key={index} value={yr}>
                {yr}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default UtmeScore;
