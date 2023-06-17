import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Block from "../elements/Block";
import Button from "../elements/Button";

export default function HeroMain() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const h1Y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  return (
    <motion.div
      style={{ opacity, y: h1Y, scale }}
      ref={ref}
      className="flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[89vh] relative p-[5%] w-fill "
    >
      <div className="text-center z-10">
        <motion.h2
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          className="text-3xl font-bold md:text-4xl"
        >
          {"Hello! I'm Adi,"}
        </motion.h2>
        <motion.h1
          initial={{ y: 100, scale: 0.3, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, type: "spring" },
          }}
          className="text-4xl md:text-5xl lg:text-6xld font-extrabold"
        >
          <span>a</span> Full Stack Developer
        </motion.h1>
        <div className="text-xl sm:text-2xl flex gap-3 flex-wrap items-center justify-center p-2">
          <p>UI/UX Designer, Enthusiast & Passionate</p>
          {/* <p>bs degree</p> */}
          <p></p>
        </div>
        <p>Scroll Down </p>
        <button className="w-full max-w-[150px] m-2d text-[3rem] font-bold animate-bounce">
          {"↓"}
        </button>
      </div>
      {/* <div className="h-[130px]"></div> */}
      <Block className=" left-[46%] z-[-1]d max-w-[50%] -top-14 " />
    </motion.div>
  );
}
