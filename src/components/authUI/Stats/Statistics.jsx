import "./Stats.css";
import Stats from "./Stats";

function Statistics({ content }) {
  return (
    <ul className="statistics w-full overflow-hidden py-[1rem] pl-[1.5px] pr-[2px]">
      {content.map((obj, idx) => (
        <Stats key={idx} obj={obj} />
      ))}
    </ul>
  );
}

export default Statistics;
