import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { glowVariant } from "../../effects";

export default function Button({
  children,
  path,
  externalLink = "",
  addstyle = " ",
  glow,
}) {
  return (
    <>
      {path && !externalLink ? (
        <Link to={`${path}`}>
          <button
            className={` ${addstyle} bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
          >
            {children}
          </button>
        </Link>
      ) : path && externalLink ? (
        <a href={path} target="_blank" rel="noopener noreferrer">
          <motion.button
            variants={glowVariant}
            animate={"hoverEffect"}
            className={` ${addstyle} rounded-xl bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
          >
            {children}
          </motion.button>
        </a>
      ) : (
        <button
          className={` ${addstyle} bg-[#0A66C2] xs:px-[1.5rem] sm:px-[2rem] md:px-[3.5rem]`}
        >
          {children}
        </button>
      )}
    </>
  );
}
