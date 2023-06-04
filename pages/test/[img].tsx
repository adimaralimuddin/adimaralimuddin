import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
export default function TestImage() {
  const router = useRouter();
  const { img } = router.query;
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["end end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <motion.div ref={target} style={{ x }} className="flex">
        <div>
          <motion.h1
            layoutId={img + "_text"}
            className="text-[6rem] font-bold p-3"
          >
            {img ?? "no image"}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 150 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="text-[2rem] max-w-[300px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          </motion.h2>
        </div>
        <motion.div
          layoutId={img}
          className="w-[550px] min-h-[500px] ring-2 ring-red-400 "
        >
          <Image
            src={`/images/stacks/${img || ""}.png`}
            width={650}
            height={500}
            alt=""
          />
        </motion.div>
      </motion.div>

      <motion.div className="h-[1500px] text-3xl font-semibold max-w-[400px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          eligendi, iste veritatis voluptatem esse natus nostrum adipisci harum
          a reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          eligendi, iste veritatis voluptatem esse natus nostrum adipisci harum
          a reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          eligendi, iste veritatis voluptatem esse natus nostrum adipisci harum
          a reprehenderit.
        </p>
      </motion.div>
    </motion.div>
  );
}
