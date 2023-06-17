import { motion } from "framer-motion";
interface props {
  icon?: string;
}
export default function Button(props: props & any) {
  return (
    <motion.button
      {...props}
      className={
        " p-1.5 px-6 rounded-md bg-primary-main  text-white hover:scale-105   " +
        props?.className
      }
    >
      {props?.children}
    </motion.button>
  );
}
