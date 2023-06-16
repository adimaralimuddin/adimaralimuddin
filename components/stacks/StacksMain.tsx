import { motion } from "framer-motion";
import Heading from "../elements/Heading";
import Hardskills from "./Hardskills";
import Softskills from "./Softskills";

export default function StackMain() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="p-[5%] w-fill"
    >
      <Heading title="MY SKILLSETS" />
      <Hardskills />
      <Softskills />
    </motion.div>
  );
}
