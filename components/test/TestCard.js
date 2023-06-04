import { motion, useMotionValue, useTransform } from "framer-motion";

export default function TestCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

  return (
    <div
      style={{ perspective: 2000 }}
      className="h-screen bg-pink-900 absolute top-0 left-0 w-full z-[100] flex items-center justify-center"
    >
      <div className=" wrapper w-[250px] h-[400px]  items-center justify-center">
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <span className="t_over"></span>
        <div className="box bg-orange-700 flex flex-col items-center justify-center">
          <h1 className="texy text-6xl font-bold">hello people</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint
            error
          </p>
        </div>
      </div>
    </div>
  );
}
