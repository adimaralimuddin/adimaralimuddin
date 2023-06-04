import { motion } from "framer-motion";
import StackLists from "./StackLists";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};
export default function Hardskills() {
  return (
    <div className=" ">
      <div className="flex flex-col-reverse lg:flex-row  gap-8 sm:gap-3 w-full max-w-5xl mx-auto justify-between">
        <Stacks />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col flex-1  justify-center lg:max-w-[40%]"
        >
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl font-bold pb-3"
          >
            Hard Skills
          </motion.h1>
          <motion.h2 variants={item} className="text-3xl font-semiboldd">
            I Equip With Cutting Edge Technologies to construct Stunning
            Applications.
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}

function Stacks() {
  return (
    <div className="flex-1 gap-3 sm:gap-0 sm:max-w-[60%] flex flex-col  ">
      <StackLists
        title="FRONTED"
        stacks={[
          "Javascript",
          "html5",
          "css",
          "Typescript",
          "ReactJs",
          "NextJs",
          "Redux",
          "TailwindCss",
          "MaterialUi",
          "React-Query",
          "Zustand",
          "PHP",
          "Python",
          "Java",
          "Ruby",
        ]}
      />
      <StackLists
        title="BACKENDS"
        stacks={[
          "GraphQl",
          "Prisma",
          "PostgresQl",
          "Redis",
          "MongoDB",
          "nestJs",
          "socket.io",
        ]}
      />
      <StackLists
        title="AND MORE"
        stacks={["GIT", "Github", "Husky", "Eslint", "Figma", "Photoshop"]}
      />
    </div>
  );
}
