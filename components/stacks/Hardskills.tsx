import StackLists from "./StackLists";

export default function Hardskills() {
  return (
    <div className=" ">
      <div className="flex gap-3 w-full max-w-5xl mx-auto justify-between">
        <Stacks />

        <div className="flex flex-col flex-1  justify-center max-w-[40%]">
          <h1 className="text-5xl font-bold pb-3">Hard Skills</h1>
          <h2 className="text-3xl font-semiboldd">
            I Equip With Cutting Edge Technologies to construct a stunning
            Applications.
          </h2>
        </div>
      </div>
    </div>
  );
}

function Stacks() {
  return (
    <div className="flex-1 max-w-[60%] flex flex-col ">
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
