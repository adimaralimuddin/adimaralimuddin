import Heading from "../elements/Heading";
import Hardskills from "./Hardskills";
import Softskills from "./Softskills";

export default function StackMain() {
  return (
    <div className="p-12">
      <Heading title="MY SKILLSETS" />
      <Hardskills />
      <Softskills />
    </div>
  );
}
