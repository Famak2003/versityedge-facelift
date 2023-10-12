import { Link } from "react-router-dom";

export default function Button({
  children,
  path,
  externalLink = "",
  addstyle = " ",
}) {
  return (
    <>
      {path && !externalLink ? (
        <Link to={`/${path}`}>
          <button
            className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
          >
            {children}
          </button>
        </Link>
      ) : path && externalLink ? (
        <a href={path}>
          <button
            className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
          >
            {children}
          </button>
        </a>
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
