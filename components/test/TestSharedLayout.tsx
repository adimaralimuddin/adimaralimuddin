import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TestLayoutShared() {
  return (
    <div className="flex gap-5">
      <Item img="reactjs" />
      <Item img="angular" />
      <Item img="css" />
      <Item img="eslint" />
    </div>
  );
}

function Item({ img }: { img: string }) {
  return (
    <Link href={`test/${img}`}>
      <motion.div className="w-[250px] min-h-[200px] ring-2 ring-red-400 ">
        <motion.h1 layoutId={img + "_text"} className="text-3xl font-bold p-3">
          {img ?? "no image"}
        </motion.h1>
        <motion.div layoutId={img}>
          <Image
            src={`/images/stacks/${img}.png`}
            width={250}
            height={200}
            alt=""
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}
