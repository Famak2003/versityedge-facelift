// import quickActionContent from "../../../data/quickActionContent'";
import Actions from "./Actions";

function QuickAction({ content }) {
  return (
    <ul className=" flex flex-wrap justify-center items-center gap-[2rem] sm:gap-[3rem]">
      {content.map((obj, idx) => {
        return <Actions key={idx} obj={obj} idx={idx} />;
      })}
    </ul>
  );
}

export default QuickAction;
