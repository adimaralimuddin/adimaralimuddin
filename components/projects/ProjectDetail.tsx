import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Button from "../elements/Button";
import ProjectType from "./ProjectType";

interface props {
  project: ProjectType | undefined;
  open: boolean;
  setOpen: any;
}

export default function ProjectDetail({ project, open, setOpen }: props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" flex flex-col gap-10  fixed top-0 left-0 w-screen h-screen px-10  py-5 bg-slate-900 bg-opacity-70"
    >
      <motion.div
        initial={{
          x: 50,
          scale: 0,
        }}
        animate={{
          x: 400,
          y: "10%",
          scale: 3.5,
          borderRadius: "0px",
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5, ease: "anticipate" },
        }}
        className="bg-white origin-center w-[500px] h-[500px] rounded-full absolute   top-0 left-0 z-[-1]"
      ></motion.div>

      <div className="flex gap-3 items-center">
        <button onClick={() => setOpen(false)}>Back</button>

        <motion.div
          initial={{ height: 0, y: -100 }}
          animate={{ height: "auto", y: 0, transition: { delay: 0.5 } }}
          className="overflow-hidden h-[12px] "
        >
          <motion.h1 className="text-5xl font-bold ">{project?.name}</motion.h1>
        </motion.div>
        <motion.button className="bg-green-500 text-white px-5 py-1 rounded-xl">
          visit
        </motion.button>
        <motion.button className="bg-green-500 text-white px-5 py-1 rounded-xl">
          github
        </motion.button>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto ">
        <motion.div
          onClick={() => setOpen(false)}
          className="ring-2 self-start"
          layoutId={project?.name}
          transition={{
            type: "spring",
            duration: 1,
            stiffness: 300,
            damping: 20,
            ease: "anticipate",
          }}
        >
          <Image width={500} height={500} src={`/images/test2.png`} alt="" />
        </motion.div>
        {/* <div className="bg-black min-h-[3009px]"></div> */}
      </div>
    </motion.div>
  );
}
