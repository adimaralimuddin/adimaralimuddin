import { ReactNode } from "react";
import HeaderMain from "../header/HeaderMain";
import SidebarMain from "../sidebar/SIdebarMain";

export default function LayoutMain({ children }: { children: ReactNode }) {
  return (
    <div className=" ">
      {/* <div className="z-10 bg-red-500 sticky top-[0px] w-full min-h-[200px]">
        <h1 className=" bg-green-400 min-h-[110px]">head head test</h1>
      </div> */}
      <HeaderMain />
      {/* <SidebarMain /> */}
      {children}
    </div>
  );
}
