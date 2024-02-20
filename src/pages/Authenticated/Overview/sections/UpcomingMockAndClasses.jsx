import * as Components from "../../../../components/authUI/index";
import * as data from "./../../../../data/index";
import DOUBLEARROW from "./../../../../assets/double-arrow-down.png";

const rightContainer = [
  { title: "Upcoming Classes", content: data.upcomingClassContent },
  { title: "Upcoming Mock", content: data.upcomingMockContent },
];
const groupTypes = ["classes", "mock"];

export function UpcomingMockAndClasses() {
  return (
    // left //
    <aside className=" hidden lmobile:flex flex-col h-fit gap-[7rem] pt-[5rem] justify-between w-[37%]">
      {rightContainer.map((obj, idx) => (
        <div
          key={idx}
          className=" w-full h-[50%] relative px-[.6rem] sm:px-[2rem] pt-[2rem] sm:pt-[4rem] rounded-3xl flex flex-col gap-[3rem] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.15)]"
        >
          <h1 className=" font-semibold Text24px">{obj.title}</h1>
          <ul className=" DisableScrollBar w-full flex h-[36rem] flex-col pb-2 overflow-auto px-1 gap-[1.5rem] justify-start pt-1 items-start">
            {obj.content.map((item, index) => (
              <Components.Group key={index} obj={item} type={groupTypes[idx]} />
            ))}
          </ul>
          <button className=" h-[4rem] absolute flex items-center px-[1.8rem] py-[1rem] rounded-3xl text-[1.4rem] gap-[1rem] bottom-4 left-[50%] text-[var(--lightgray)] bg-[var(--blue)] translate-x-[-50%] active:ring-1 active:ring-[var(--gray)] ">
            <p>Veiw all</p>
            <img
              className=" h-[1.6rem] object-contain"
              src={DOUBLEARROW}
              alt="view all"
            />
          </button>
        </div>
      ))}
    </aside>
  );
}
