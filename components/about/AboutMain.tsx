import Block from "../elements/Block";

export default function AboutMain() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dpt-[15%] relative">
      <div className="w-full max-w-5xl mx-auto ">
        <h1 className="text-5xl py-3 font-bold">
          Hi Again, {"I'm"} Adimar Alimuddin.
        </h1>
        <Statement className="pt-0 font-bold text-[1.9rem]">
          A Full Stack Developer Based In The Philippines.
        </Statement>
        <Statement>
          {"I'm"} <Bold>Passionate</Bold> about Everything related to software
          development, and more specifically in <Bold>web</Bold> and
          <Bold>mobile development</Bold>.
        </Statement>
        <Statement>
          I <Bold>Love to turn ideas</Bold> into <Bold>real applications</Bold>,
          and i build them with my <Bold>full potentials</Bold> to Achieve{" "}
          <Bold>Ideal Web Apps</Bold>.
        </Statement>
        <Statement>
          {"I'm"} Ever <Bold>Learning and Evolving</Bold>. I{" "}
          <Bold>Enjoy and Love</Bold> what I do, and <Bold>Continue</Bold> Doing
          so.
        </Statement>
      </div>

      <Block className="w-[50%] h-[50%] bottom-[25%] left-[5%]" />
    </div>
  );
}

function Statement(props: any) {
  return (
    <h1
      {...props}
      className={
        "text-[1.7rem] py-3 leading-[1.1]  max-w-[80%] " + props?.className
      }
    >
      {props?.children}
    </h1>
  );
}

function Bold({ children }: any) {
  return (
    <span className="relative border-b-[10px]d border-cyan-500 w-min">
      <span className="absolute z-[-1] bottom-0 left-0 w-full h-[6px] bg-cyan-300 opacity-30 p-[10px]"></span>
      <span className="font-semibold px-1 ">{children}</span>
    </span>
  );
}
