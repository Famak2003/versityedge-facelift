export default function Input({ children, comment, num, input }) {
  return (
    <li className=" w-[90%]">
      <div className=" flex">
        <label
          className=" Text24px mr-6 block w-[40%] min-w-[20rem] md:leading-9"
          htmlFor={`input${num}`}
        >
          {children} <br />
          {comment ? (
            <small className=" Text16px italic leading-4 md:leading-7 ">
              {comment}
            </small>
          ) : (
            ""
          )}
        </label>

        {input === "text" && (
          <input
            className=" h-[2.8rem] w-[35%] min-w-[15rem] rounded-lg py-[.7rem] pl-[1.5rem] ring-1 ring-[#D9DADB] active:ring-black "
            type={input}
            id={`input${num}`}
            name={`input${num}`}
          />
        )}
        {input === "select" && (
          <select className="Text16px h-[2.8rem] w-[35%] min-w-[15rem] rounded-lg py-[.2rem] pl-[1.5rem] ring-1 ring-[#D9DADB]">
            <option className="" selected disabled>
              Please select
            </option>
            <option value={"vhsjhjjwwj"}>vhsjhjjwwj</option>
            <option value={"vhsjhjjwwj"}>vhsjhjjwwj</option>
            <option value={"vhsjhjjwwj"}>vhsjhjjwwj</option>
            <option value={"vhsjhjjwwj"}>vhsjhjjwwj</option>
          </select>
        )}
        {input === "number" && (
          <input
            className=" h-[2.8rem] w-[35%] min-w-[15rem] rounded-lg py-[.7rem] pl-[1.5rem] ring-1 ring-[#D9DADB] active:ring-black "
            type={input}
            id={`input${num}`}
            name={`input${num}`}
          />
        )}
        {input === "radio" && <input type={input} id={`input${num}`} />}
      </div>
    </li>
  );
}
