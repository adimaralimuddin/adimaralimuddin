import { motion } from "framer-motion";
import Heading from "../elements/Heading";
import Lister from "../elements/Lists";

const itemVariants = {
  hide: { x: 300 },
  show: {
    x: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export default function WorkMain() {
  return (
    <motion.div
      // initial={{ x: 200 }}
      // whileInView={{
      //   x: 0,
      // }}
      className="min-h-screen flex flex-col justify-center   w-fill overflow-x-hidden "
    >
      {/* <Heading title="WHAT I DO" /> */}
      {/* <Header /> */}
      <div className=" flexd   gap-3 ring-1d py-[50px] px-2 w-full max-w-5xl mx-auto">
        <motion.div variants={itemVariants} initial="hide" whileInView="show">
          <Lister
            lists={[
              "modern ui/ux design",
              "responsive & cross browser",
              "using cutting edge technologies to maximize  potential",
              "fast and optimized",
              "scalable infrastructure",
              "tested",
            ]}
            header=" I Build Web Apps that Is:"
          />
        </motion.div>
        {/* <motion.div variants={itemVariants} initial="hide" whileInView="show"> */}
        <Lister
          lists={[
            "modern ui/ux design",
            "responsive & cross browser",
            "using cutting edge technologies to maximize  potential",
            "fast and optimized",
            "scalable infrastructure",
            "tested",
          ]}
          header="How I do in my work flow"
        />
        {/* </motion.div> */}
      </div>
    </motion.div>
  );
}

const Header = () => (
  <header className="flex items-center justify-center p-3 text-xl">
    <h1>What I DO</h1>
  </header>
);
