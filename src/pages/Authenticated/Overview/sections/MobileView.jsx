import * as AuthComponents from "../../../../components/authUI/index";
import * as Components from "./../../../../components/common/index";
import * as data from "../../../../data/index";

export function MobileView() {
  return (
    <div className=" w-full lmobile:hidden flex flex-col gap-[4rem]">
      <div className=" lmobile:hidden">
        <Components.Search addFilter={true} spaceFilterNButton={true} />
      </div>
      {/* // University Cards // */}
      <ul className=" relative h-[20rem] flex lmobile:hidden flex-col mb-[5rem]">
        {data.ThrippleStatsContent.map((obj, idx) => (
          <AuthComponents.Stats
            mobile={true}
            num={idx + 1}
            key={idx}
            obj={obj}
          />
        ))}
      </ul>
      {/* // Features // */}
      <div className=" flex flex-col gap-[3rem]">
        <h2 className=" Features MobileHeader">Features</h2>
        <ul className=" features">
          {data.features.map((obj, idx) => (
            <AuthComponents.Actions key={idx} idx={idx} obj={obj} />
          ))}
        </ul>
      </div>
      {/* // Today's Class // */}
      <div className="flex flex-col gap-[2rem]">
        <h2 className="MobileHeader">Today's Classes</h2>
        <ul className=" flex flex-col gap-[2.2rem]">
          {data.mobileUpcomingClassContent.map((obj, idx) => {
            return (
              <AuthComponents.Group key={idx} obj={obj} type={"classes"} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
