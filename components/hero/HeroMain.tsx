import Block from "../elements/Block";
import Button from "../elements/Button";

export default function HeroMain() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[89vh] relative ring-1d">
      <div className="text-center z-10">
        <h2 className="text-3xl">{"Hello! I'm Adi,"}</h2>
        <h1 className="text-5xl font-bold">
          <span>a</span> Full Stack Developer
        </h1>
        <div className="text-xl flex gap-3 flex-wrap items-center justify-center p-2">
          <p>Ui/Ux Designer</p>
          <p>bs degree</p>
          <p></p>
        </div>
        <p>Scroll Down </p>
        <Button className="w-full max-w-[150px] m-2 text-lg font-semibold ">
          {"-->"}
        </Button>
      </div>
      <div className="h-[90px]"></div>
      <Block className=" left-[46%] z-[-1]d max-w-[50%] -top-14 " />
    </div>
  );
}
