import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
// import useTheme from "../../store/themeStore";
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
  const container = useRef<HTMLDivElement>(null);

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

  const imgX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-900, 0, 0, 800]
  );
  const imgY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [200, 0, 0, -200]
  );
  const backS = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-900, 0, 0, 800]
  );
  const backX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-900, 0, 0, 800]
  );
  const backY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [200, 0, 0, -200]
  );

  const headerX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [800, 0, 0, -800]
  );

  return (
    <motion.div
      className={
        "  min-h-[120vh] flex flex-col items-center snap-item" +
        (dark && " bg-slate-100 ")
      }
    >
      <motion.div
        ref={container}
        layoutId={project.name + "text"}
        className={
          " flex-1 flex flex-col md:flex-row  max-w-6xl " +
          (left ? " md:flex-row-reverse   " : "  ")
        }
      >
        {/* header */}
        <motion.div
          style={{ x: headerX }}
          className=" flex flex-1 gap-3 flex-col justify-center p-[5%] z-10 bg-white "
        >
          <motion.h1 className="text-xl sm:text-3xl font-extrabold text-font-header">
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
        </motion.div>

        {/* images */}
        <motion.div className="hover:z-20 flex-1 relative flex flex-col">
          <motion.div
            style={{
              scale: backS,
              x: backX,
              y: backY,
            }}
            className="absolute bg-green-400 z-[-1] top-0 left-0  flex-1  "
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
            className="flex-1  flex justify-center items-center  p-3 "
          >
            <Images project={project} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Images({ project }: { project: ProjectType }) {
  const [hovered, setHovered] = useState(false);
  const name = project.name?.toLowerCase();
  return (
    <CardTilt
      onHover={() => setHovered(true)}
      onLeave={() => setHovered(false)}
      className=" shadow-lg rounded-xl "
    >
      <div className=" pro-img-container">
        <Image
          className=""
          src={`/images/projects/${name}/1.png`}
          alt=""
          width={400}
          height={400}
        />
        <ProImg name={name} num={2} hovered={hovered} />
        <ProImg name={name} num={3} hovered={hovered} />
      </div>
    </CardTilt>
  );
}

function ProImg({
  name,
  num,
  hovered,
}: {
  name: string;
  num: number;
  hovered: boolean;
}) {
  if (name == "toko") return null;
  return (
    <Image
      style={
        hovered
          ? { transform: `translateZ(${15 * num}px)`, border: "d2px solid red" }
          : undefined
      }
      className=" pro-img absolute "
      src={`/images/projects/${name}/${num}.png`}
      alt={name}
      width={400}
      height={400}
    />
  );
}

function Features({ features }: { features: string[] }) {
  return (
    <div>
      <h2 className="text-sm text-font-subtitle sm:text-base font-semibold">
        FEATURES
      </h2>
      <div className="flex flex-wrap gap-2 py-2">
        {features?.map((feature) => (
          <div
            className="text-sm sm:text-base px-2 rounded-md bg-slate-50 ring-1 ring-slate-200 text-slate-500"
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
      <h2 className="text-font-subtitle text-sm sm:text-base font-semibold">
        TECHNOLOGY
      </h2>
      <div className="flex flex-wrap gap-1 py-2">
        {stacks?.map((feature) => (
          <div
            className=" text-sm sm:text-base p-1d px-2 rounded-md bg-secondary-light text-white "
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
          Live{" "}
        </Link>
      </Button>
      <Button icon="eye">
        <Link href={project?.github} target="_blank">
          Code
        </Link>
      </Button>
      {/* <Button icon="eye">
        <Link href={`/project/${project?.name}`}>enter</Link>
      </Button> */}
    </div>
  );
}
