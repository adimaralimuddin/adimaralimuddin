import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Button from "../elements/Button";
import ProjectType from "./ProjectType";

type Props = {
  project: ProjectType;
  left?: boolean;
  dark?: boolean;
};
export default function ProjectItem({ project, left, dark }: Props) {
  const width = 300;
  const height = 500;
  const kenal_section = useRef<any>(null).current;
  const kenal_card = useRef<any>(null);

  // function art(e:) {
  //   let x = (kenal_section?.clientWidth / 2 - rotate.x) / 15;
  //   let y = (kenal_section?.clientHeight / 2 - rotate.y) / 15;
  //   kenal_card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  // }

  return (
    <div
      onMouseMove={(e) => {
        let x = (kenal_section?.clientWidth / 2 - e.x) / 15;
        let y = (kenal_section?.clientHeight / 2 - e.y) / 15;
        console.log(kenal_card.current.style.transform);
        kenal_card.current.style.transform =
          "rotateY(" + x + "deg) rotateX(" + y + "deg)";
      }}
      ref={kenal_section}
      className={"min-h-screen " + (dark && " bg-slate-100 ")}
    >
      <div
        className={
          "flex gap-[5%] p-4 mx-auto w-full max-w-5xl min-h-[90vh] ring-1d items-center " +
          (left && " flex-row-reverse")
        }
      >
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{project?.name}</h1>
          <h2 className="text-xl font-d">{project?.description}</h2>
          <Features features={project?.features} />
          <Stacks stacks={project?.stacks} />
          <Buttons {...project} />
        </div>
        <div
          ref={kenal_card}
          className="flex-1  bg-slate-50 w-full h-full p-10  min-h-[400px] flex items-center justify-center relative"
        >
          {/* <Image
            className="ring-1d position absolute right-12"
            src="/images/test.png"
            alt="test"
            width={900}
            height={900}
          /> */}
          <Image
            className="ring-1 dposition dabsolute right-12"
            // src={"/projects/lango/1.png"}
            src={`/projects/${project.name?.toLowerCase()}/3.png`}
            alt=""
            width={width}
            height={height}
          />
          {/* <Image
            className="ring-1d position absolute right-12"
            // src={"/projects/lango/1.png"}
            src={`/projects/${project.name?.toLowerCase()}/2.png`}
            alt=""
            width={width}
            height={height}
          />
          <Image
            className="ring-1d position absolute right-12"
            // src={"/projects/lango/1.png"}
            src={`/projects/${project.name?.toLowerCase()}/3.png`}
            alt=""
            width={width}
            height={height}
          />
          <Image
            className="ring-1d position absolute right-12"
            // src={"/projects/lango/1.png"}
            src={`/projects/${project.name?.toLowerCase()}/4.png`}
            alt=""
            width={width}
            height={height}
          />
          <Image
            className="ring-1d position absolute right-12"
            // src={"/projects/lango/1.png"}
            src={`/projects/${project.name?.toLowerCase()}/5.png`}
            alt=""
            width={width}
            height={height}
          /> */}
        </div>
      </div>
    </div>
  );
}

function Features({ features }: { features: string[] }) {
  return (
    <div>
      <h2 className="font-semibold">FEATURES</h2>
      <div className="flex flex-wrap gap-1 py-2">
        {features?.map((feature) => (
          <div className="p-1d px-2 rounded-md bg-slate-100" key={feature}>
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
      <h2 className="font-semibold">TECHNOLOGY</h2>
      <div className="flex flex-wrap gap-1 py-2">
        {stacks?.map((feature) => (
          <div
            className="p-1 px-2 rounded-md bg-slate-600 text-white text-sm"
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
        <Link href={project?.link}>live</Link>
      </Button>
      <Button icon="eye">
        <Link href={project?.github}>code</Link>
      </Button>
    </div>
  );
}
