import Heading from "../elements/Heading";
import Lister from "../elements/Lists";

export default function WorkMain() {
  return (
    <div className="min-h-screen bg-slate-2d00 ring-2 ring-slate-200">
      {/* <Heading title="WHAT I DO" /> */}
      {/* <Header /> */}
      <div className=" flexd   gap-3 ring-1d py-[50px] px-2 w-full max-w-5xl mx-auto">
        <Lister
          lists={[
            "modern ui/ux design",
            "responsive & cross browser",
            "using cutting edge technologies to maximize  potential",
            "fast and optimized",
            "scalable infrastructure",
            "tested",
          ]}
          header=" I Build Web Apps that Is:"
        />
        <Lister
          lists={[
            "modern ui/ux design",
            "responsive & cross browser",
            "using cutting edge technologies to maximize  potential",
            "fast and optimized",
            "scalable infrastructure",
            "tested",
          ]}
          header="How I do in my work flow"
        />
      </div>
    </div>
  );
}

const Header = () => (
  <header className="flex items-center justify-center p-3 text-xl">
    <h1>What I DO</h1>
  </header>
);
