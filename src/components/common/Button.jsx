import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Button({ children, link, addstyle = " " }) {
  return (
    <Link to={`/${link}`}>
      <button
        className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
      >
        {children}
      </button>
    </Link>
  );
}
