import { motion } from "framer-motion";
import useTheme from "../../store/themeStore";
interface props {
  icon?: string;
}
export default function Button(props: props & any) {
  const theme = useTheme();
  return (
    <motion.button
      {...props}
      style={{ backgroundColor: theme.primary }}
      className={
        " p-1.5 px-6 bg-button-maind bg-teal-600d text-white hover:scale-105   " +
        props?.className
      }
    >
      {props?.children}
    </motion.button>
  );
}
