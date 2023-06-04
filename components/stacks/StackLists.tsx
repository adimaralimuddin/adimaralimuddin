import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.3 },
  },
};

const item = {
  hide: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
export type StackListsProps = { title: string; stacks: string[] };
export default function StackLists(props: StackListsProps) {
  return (
    <motion.div
      // initial="hide"
      // whileInView="show"
      className="p-2"
    >
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { damping: 30 } }}
        className="text-2xl sm:text-xl font-semibold pb-3"
      >
        {props?.title}
      </motion.h1>
      <motion.div
        variants={container}
        initial="hide"
        whileInView="show"
        className="flex flex-wrap gap-2 "
      >
        {props?.stacks?.map((stack) => (
          <motion.div
            variants={item}
            // initial="hidden"
            // whileInView="show"
            className="flex gap-1 bg-slate-50 rounded-md p-[1px] px-[4px] ring-1 ring-slate-100"
            key={stack}
          >
            <div className="flex items-center justify-center">
              <Image
                className=" rounded-md max-w-[24px] max-h-[24px]"
                src={`/images/stacks/${stack?.toLowerCase()}.png`}
                alt=""
                width={18}
                height={18}
              />
            </div>
            <p className="sm:text-[.9rem]">{stack}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
