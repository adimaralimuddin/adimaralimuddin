import { ReactNode } from "react";
import HeaderMain from "../header/HeaderMain";
import SidebarMain from "../sidebar/SIdebarMain";

export default function LayoutMain({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <HeaderMain />
      <SidebarMain />
      {children}
    </div>
  );
}
