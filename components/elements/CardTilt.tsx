import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { ReactNode } from "react";
interface props {
  children?: ReactNode;
  className?: string;
  onHover?: any;
  onLeave?: any;
}

export default function CardTilt({
  children,
  className,
  onHover,
  onLeave,
}: props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }} className={" " + className}>
      <div onMouseEnter={onHover} onMouseLeave={onLeave} className="  wrapper ">
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <div className={"box flex-col " + className}>{children}</div>
      </div>
    </div>
  );
}
