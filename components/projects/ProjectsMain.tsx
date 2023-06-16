import KenalData from "../../data/projects/kenal";
import LangoData from "../../data/projects/lango";
import TaskyData from "../../data/projects/tasky";
import TokoData from "../../data/projects/toko";
import Heading from "../elements/Heading";
import ProjectItem from "./ProjectItem";
import ProjectType from "./ProjectType";

interface props {
  onSelect: (proj: ProjectType) => void;
}
export default function ProjectsMain({ onSelect }: props) {
  return (
    <div id="works " className="">
      <Heading title="PROJECTS" />
      <ProjectItem onSelect={onSelect} project={TaskyData} dark={true} />
      <ProjectItem onSelect={onSelect} project={KenalData} left={true} />
      <ProjectItem onSelect={onSelect} project={LangoData} dark={true} />
      <ProjectItem onSelect={onSelect} project={TokoData} left={true} />
    </div>
  );
}
