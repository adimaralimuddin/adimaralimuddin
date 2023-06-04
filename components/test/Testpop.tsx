import { motion } from "framer-motion";
import { useState } from "react";

export default function Testpop() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-16">
      {open ? (
        <motion.div
          layoutId="testpop"
          onClick={() => setOpen((p) => !p)}
          className="bg-pink-900 w-[100px] h-[100px]"
        >
          <h1 className="text-3xl font-bold">B</h1>
        </motion.div>
      ) : (
        <div className="ring-1 flex justify-end">
          <motion.div
            layoutId="testpop"
            onClick={() => setOpen((p) => !p)}
            className="bg-green-900 w-[300px] h-[300px]"
          >
            <h1 className="text-3xl font-bold">A</h1>
          </motion.div>
        </div>
      )}
    </div>
  );
}
