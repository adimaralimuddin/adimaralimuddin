import { ReactNode } from "react";

export default function SidebarMain() {
  return (
    <div className="p-2 fixed top-[40%] right-0d z-20">
      <p className="rotate-90">scroll down {"  --->"}</p>
      {/* <ol className=" flex flex-col gap-10">
        <Menu>Home</Menu>
        <Menu>About</Menu>
        <Menu>Contact</Menu>
      </ol> */}
    </div>
  );
}

type menuProps = { children: ReactNode };
function Menu({ children }: menuProps) {
  return (
    <li className="rotate-90 font-semibold">
      <a href={"#"}>{children}</a>
    </li>
  );
}
