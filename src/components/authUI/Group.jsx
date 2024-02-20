import CLOCK from "./../../assets/alarm.png";
import CALENDER from "./../../assets/calender.png";
import AVATAR from "./../../assets/avatar-2.png";

function Group({ obj, type }) {
  let statusColor;

  function status() {
    if (obj.status === "Completed") {
      statusColor = `var(--successGreen)`;
    }
    if (obj.status === "Live") {
      statusColor = `var(--primaryRed)`;
    }
  }

  status();

  return (
    <li className=" flex h-[11rem] relative gap-[2rem] lmobile:gap-2 md:gap-[1rem] lmobile:pb-[.5rem] ring-0 lmobile:ring-1 pl-[.5rem] lmobile:pl-[1.5rem] lmd:pl-[2.5rem] justify-between lmobile:min-h-[7.5rem] lmobile:h-[10.5rem] w-full rounded-3xl ring-[var(--lightgray)] shadow-[0px_2px_4px_0px_rgba(175,175,175,.25)]  items-center overflow-hidden duration-300">
      {/* // image // */}
      <figure
        className={` w-[16rem] justify-center lmobile:w-20 h-full lmobile:items-start flex rounded-2xl lmobile:self-start lmobile:pt-6`}
      >
        {obj.image ? (
          <img
            className=" object-contain h-full w-full"
            src={obj.image}
            alt="courses"
          />
        ) : (
          <img className=" object-contain w-full" src={AVATAR} alt="courses" />
        )}
      </figure>
      {/* // middle content // */}
      <div className=" flex flex-col lmobile:pl-0 gap-[.3rem] smobile:gap-[1rem] lmobile:gap-1 md:gap-2 justify-center w-full py-[4rem] pr-[1rem] lmobile:pr-0">
        {type === "classes" && (
          <>
            <h3 className=" font-semibold text-[1.4rem] Truncate">{`Subject: ${obj.title}`}</h3>
            <h4 className=" flex flex-row gap-[1rem] lmobile:gap-0 lmobile:justify-center w-full lmobile:w-fit items-center font-semibold lmobile:inline-block lmobile:Truncate text-[.9rem]">
              {obj.teacherImg ? (
                <img
                  className=" object-contain"
                  src={obj.teacherImg}
                  alt="teacher"
                />
              ) : (
                <span>Teacher Name: </span>
              )}
              <span className="">{obj.teacher}</span>
            </h4>
            <div className=" flex justify-between lmobile:gap-[2rem] h-[1.4rem] pr-[.5rem] w-full lmobile:w-fit">
              <span className=" hidden lmobile:flex font-semibold h-full gap-[1rem]">
                <img
                  className=" object-contain h-full"
                  src={CALENDER}
                  alt="calender"
                />
                <p className=" text-[1rem]">{obj.calender}</p>
              </span>
              <span className=" flex h-full font-semibold gap-[1rem]">
                <img
                  className=" object-contain h-full"
                  src={CLOCK}
                  alt="time"
                />
                <p className="text-[1rem]">{obj.time}</p>
              </span>
              <span className=" flex lmobile:hidden h-full font-semibold gap-[1rem]">
                <p className="text-[1rem] text-[var(--blue)]">Notify me</p>
              </span>
            </div>
          </>
        )}
        {type === "mock" && (
          <>
            <h3 className=" font-bold text-[1.4rem] Truncate">{`User: ${obj.user}`}</h3>
            <h4 className=" text-[1rem] Truncate ">{`Mock Exam: ${obj.mockExam}`}</h4>
            <h4 className=" text-[1rem] Truncate">{`Subject: ${obj.subject}`}</h4>
          </>
        )}
      </div>

      {/* // status // */}
      <div className=" absolute pb-1 right-0 top-0 flex flex-col justify-between h-full w-[20%]">
        <p
          style={{ background: `${statusColor}` }}
          className={` text-[var(--white)] text-[.8rem] pl-[1rem] pr-[1.5rem] flex justify-center items-center h-[2rem] lmobile:h-fit`}
        >
          {obj.status}
        </p>
        {type === "mock" && (
          <div className=" self-end mr-12 flex items-center gap-[1rem] h-[.7rem] w-fit">
            <span className=" flex font-semibold h-full gap-[.3rem]">
              <img
                className=" object-contain h-full"
                src={CALENDER}
                alt="calender"
              />
              <p className=" text-[.6rem]">{obj.calender}</p>
            </span>
            <span className=" flex font-semibold h-full gap-[.3rem]">
              <img className=" object-contain h-full" src={CLOCK} alt="time" />
              <p className="text-[.6rem]">{obj.time}</p>
            </span>
          </div>
        )}
      </div>
    </li>
  );
}

export default Group;
