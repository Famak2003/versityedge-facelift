import { useState } from "react";

function Years() {
  const currentYear = new Date().getFullYear();
  const startYear = 1960;
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
}

const UtmeAttempts = () => (
  <div className=" flex items-center gap-[5rem]">
    <div className="flex gap-[1rem]">
      <label>Utme Score</label>{" "}
      <input
        className=" h-[2.8rem] w-[4rem] rounded-lg px-[1rem] ring-1 ring-[var(--gray-texture)]"
        placeholder="..."
      />
    </div>
    <div className=" flex gap-[1rem]">
      <label>Year</label>
      <select className=" h-[2.8rem] w-[7rem]  rounded-lg pl-[.5rem] ring-1 ring-[var(--gray-texture)]">
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

function UtmeScore() {
  const [attempts, setAttemps] = useState(1);
  let numAttempts = Array.from({ length: attempts - 1 }, (_, i) => i + 1);
  return (
    <div>
      <p className=" Text24px text-center">
        Please provide your UTME score for the most recent exam you have taken,
        along with any previous UTME scores if applicable.
      </p>
      <ul>
        <li className=" list-disc">
          <div className=" flex items-center gap-5">
            <label htmlFor="UTMEAttemps">Number of UTME attempts</label>
            <select
              onChange={(e) => setAttemps(e.target.value)}
              value={attempts}
              name="UTMEAttemps"
              id="UTMEAttemps"
              className="h-[2.8rem] w-[5rem] rounded-lg px-[1rem] ring-1 ring-[var(--gray-texture)]"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </li>
      </ul>
      <UtmeAttempts />
      <p className=" text-[var(--gray-texture)]">Other Settings</p>
      <div>
        {numAttempts.map((atmp, index) => {
          return <UtmeAttempts key={index} />;
        })}
      </div>
    </div>
  );
}

export default UtmeScore;
