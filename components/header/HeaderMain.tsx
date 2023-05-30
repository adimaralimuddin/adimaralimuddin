import Logo from "./Logo";

export default function HeaderMain() {
  return (
    <div className="flex bg-white  p-4 ">
      <div className="flex flex-wrap w-full max-w-5xl mx-auto px-3 justify-between z-10 ">
        <Logo />
        <nav className="flex items-ceter justify-between gap-4 flex-wrap">
          <Menu text="Works" />
          <Menu text="Skills" />
          <Menu text="About" />
          <Menu text="Contact" />
        </nav>
      </div>
    </div>
  );
}

function Menu({ text }: { text: string }) {
  return (
    <li className=" list-none text-lg font-semibold">
      <a href="">{text}</a>
    </li>
  );
}
