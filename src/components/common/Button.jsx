import { Link } from "react-router-dom";

export default function Button({ children, path, addstyle = " " }) {
  return (
    <>
      {path ? (
        <Link to={`/${path}`}>
          <button
            className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
        >
          {children}
        </button>
      )}
    </>
  );
}
