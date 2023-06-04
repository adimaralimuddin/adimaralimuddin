import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function ContactConnect() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5  } }}
      className="flex-1 flex flex-col max-w-[550px] w-full p-3"
    >
      <h1 className="text-center text-3xl font-bold">Connect With Me</h1>
      <div className="flex flex-col gap-3 justify-center py-6">
        <Item
          img="linkedin"
          href="https://www.linkedin.com/in/adimar-alimuddin/"
        >
          linkedin.com/in/adimar-alimuddin
        </Item>
        <Item img="github" href="https://github.com/adimaralimuddin">
          github.com/adimaralimuddin
        </Item>
        <Item img="email" href="">
          adimaraisha@gmail.com
        </Item>
      </div>
    </motion.div>
  );
}

function Item({
  href,
  children,
  img,
}: {
  href: string;
  children: ReactNode;
  img: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-lg font-semibold hover:underline  "
    >
      <div className="flex items-center gap-3">
        <Image src={`/images/icons/${img}.png`} width={24} height={24} alt="" />
        {children}
      </div>
    </Link>
  );
}
