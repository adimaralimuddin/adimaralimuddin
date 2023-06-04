interface props {
  lists: string[];
  header: string;
}

import { motion } from "framer-motion";

const x = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const y = {
  hide: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};
export default function Lister(props: props) {
  return (
    <div className="p-3 ring-2d ring-slate-100 flex-1">
      <h2 className="font-extrabold text-2xl sm:text-5xl ">{props?.header}</h2>
      <div className="bg-cyan-500 p-[4px] w-full max-w-[100px] "></div>
      <motion.div
        variants={x}
        initial="hide"
        whileInView="show"
        // initial={{ x: 0 }}
        // animate={{ transition: { staggerChildren: 0.4 } }}
        className="py-3"
      >
        {props.lists?.map((list) => (
          <motion.li
            variants={y}
            // initial="hide"
            // animate="show"
            // initial={{ opacity: 0, x: 100 }}
            // whileInView={{ opacity: 1, x: 0, transition: { duration: 2 } }}
            key={list}
            className="text-lg"
          >
            {list}
          </motion.li>
        ))}
      </motion.div>
    </div>
  );
}
