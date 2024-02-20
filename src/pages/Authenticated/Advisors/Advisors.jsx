import { motion } from "framer-motion";
import { containerVariant } from "../../../effects";

function Advisors() {
  return (
    <motion.section
      variants={containerVariant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    ></motion.section>
  );
}

export default Advisors;
