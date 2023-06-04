import {
  AnimatePresence,
  Variants,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import useTheme from "../../store/themeStore";
import Button from "../elements/Button";
import CardTilt from "../elements/CardTilt";
import ProjectType from "./ProjectType";
type Props = {
  project: ProjectType;
  left?: boolean;
  dark?: boolean;

  onSelect: (proj: ProjectType) => void;
};
export default function ProjectItem({ project, left, dark, onSelect }: Props) {
  const width = 300;
  const height = 300;
  const container = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const elemHide = { opacity: 0, x: 200 };
  const elemShow = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, type: "spring" },
  };

  const containerY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.7, 1],
    [100, 10, 10, 250, 0]
  );
  const imgX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [-900, 0, 150, 800]
  );
  const imgY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [200, 0, -80, -200]
  );
  const headerX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [600, 0, -100, -500]
  );
  const backOpac = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [0, 1, 1, 0]
  );
  const backRingX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [800, 0, -150, -800]
  );
  const backRingY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [-200, 0, 80, 200]
  );

  return (
    <motion.div
      // ref={container}
      className={
        "  max-w-screen sm:bg-red-400d md:bg-green-400d lg:bg-pink-300d  ring-1d  min-h-[220vh]  sm:min-h-[200vh] md:min-h-[150vh] py-12  flex-col relative " +
        (dark && " bg-slate-100 ")
      }
    >
      {/* duv */}
      <motion.div
        ref={container}
        style={{ y: containerY }}
        layoutId={project.name + "text"}
        className={
          "flex ring-2d min-h-[170vh] sm:min-h-[160vh] md:min-h-[100vh] flex-col md:flex-row  items-center justify-evenly   mx-auto  max-w-6xl bg-red-500d  sticky  top-0   " +
          // ""
          (left
            ? " md:flex-row-reverse md:justify-between  "
            : " md:justify-center ")
        }
      >
        {/* header */}
        <motion.div
          style={{ x: headerX }}
          className=" flex  md:max-w-[350px] dsm:self-stretch flex-col justify-center p-12 md:p-[2%]    z-10 bg-white "
        >
          <motion.h1 className="text-xl sm:text-3xl font-bold">
            {project?.name}
          </motion.h1>
          <motion.h2>{project?.description}</motion.h2>
          <motion.div initial={elemHide} whileInView={elemShow}>
            <Features features={project?.features} />
          </motion.div>
          <motion.div initial={elemHide} whileInView={elemShow}>
            <Stacks stacks={project?.stacks} />
          </motion.div>
          <Buttons {...project} />
          {/* <button onClick={() => onSelect(project)}>open</button> */}
        </motion.div>

        {/* images */}
        <motion.div
          style={{ backgroundColor: theme?.primary }}
          className="hidden md:flex  max-w-[350px] relative w-full h-full"
        >
          <motion.div
            style={{
              scale: backOpac,
              x: backRingX,
              y: backRingY,
            }}
            className="absolute z-[-1] top-0 left-0  flex-1 w-full h-full"
          ></motion.div>
          <motion.div
            layoutId={project.name}
            style={{ x: imgX, y: imgY }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.7,
            }}
            className="flex justify-center items-center  "
          >
            <Images />
          </motion.div>
        </motion.div>

        {/* unages mobile */}
        <div className="md:hidden  ">
          <Images />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Images() {
  const [hovered, setHovered] = useState(false);

  return (
    <CardTilt
      onHover={() => setHovered(true)}
      onLeave={() => setHovered(false)}
      className="shadow-lg "
    >
      <div className=" ">
        <Image
          className=" "
          src={"/images/test2.png"}
          alt=""
          width={400}
          height={400}
        />
        <Image
          style={hovered ? { transform: "translateZ(30px)" } : undefined}
          className="  absolute right-[-60px] bottom-[-50px] shadow-lg transition-all"
          src={"/images/test2.png"}
          alt=""
          width={150}
          height={150}
        />
      </div>
    </CardTilt>
  );
}

function Features({ features }: { features: string[] }) {
  return (
    <div>
      <h2 className="text-sm sm:text-base font-semibold">FEATURES</h2>
      <div className="flex flex-wrap gap-1 py-2">
        {features?.map((feature) => (
          <div
            className="text-sm sm:text-base px-2 rounded-md bg-slate-100"
            key={feature}
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function Stacks({ stacks }: { stacks: string[] }) {
  return (
    <div>
      <h2 className="text-sm sm:text-base font-semibold">TECHNOLOGY</h2>
      <div className="flex flex-wrap gap-1 py-2">
        {stacks?.map((feature) => (
          <div
            className=" text-sm sm:text-base p-1 px-2 rounded-md bg-slate-600 text-white "
            key={feature}
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function Buttons(project: ProjectType) {
  return (
    <div className="flex gap-2">
      <Button icon="eye">
        <Link href={project?.link} target="_blank">
          👀 live{" "}
        </Link>
      </Button>
      <Button icon="eye">
        <Link href={project?.github} target="_blank">
          code
        </Link>
      </Button>
      {/* <Button icon="eye">
        <Link href={`/project/${project?.name}`}>enter</Link>
      </Button> */}
    </div>
  );
}
