import * as Components from "../../../../components/authUI/index";
import * as data from "../../../../data/index";

export function Live() {
  return (
    <ul className=" flex flex-col gap-[2rem]">
      {data.upcomingClassContent.map((obj, idx) => (
        <Components.Group key={idx} type={"classes"} obj={obj} />
      ))}
    </ul>
  );
}
