import KenalData from "../../data/projects/kenal";
import LangoData from "../../data/projects/lango";
import TaskyData from "../../data/projects/tasky";
import TokoData from "../../data/projects/toko";
import Heading from "../elements/Heading";
import ProjectItem from "./ProjectItem";
export default function ProjectsMain() {
  return (
    <div>
      <Heading title="WHAT I'VE BUILT" />
      <ProjectItem project={KenalData} left={true} />
      <ProjectItem project={TaskyData} dark={true} />
      <ProjectItem project={TokoData} left={true} />
      <ProjectItem project={LangoData} dark={true} />
    </div>
  );
}
