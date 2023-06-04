import { motion } from "framer-motion";

const skills: string[] = [
  "Productivity",
  "Planing & Time Management",
  "Patience",
  "Passion & Enthusiast",
  "Adaptability & Eager to Learn New Things",
  "Effective Communication in (English, Tagalog, and Indonesian)",
  "Problem Solver",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, x: -500 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export default function Softskills() {
  return (
    <div className="py-12">
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl mx-auto justify-between">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col flex-1  justify-center"
        >
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl font-bold pb-3"
          >
            Soft Skills
          </motion.h1>
          <motion.h2 variants={item} className="text-3xl">
            I Practice My Work inlined With Valuable Personality in working
            Environment
            {/* Soft skills are very essentials in development. with soft skills,
            the team are able to accomplish tasks. */}
          </motion.h2>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="show"
          className="flex-1 p-4 max-w-[40%]d"
        >
          {skills?.map((skill) => (
            <motion.li
              variants={{
                hidden: { y: 50, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { type: "tween" } },
              }}
              className="text-xl font-semibold"
              key={skill}
            >
              {skill}
            </motion.li>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
