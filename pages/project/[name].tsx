import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProjectDetail() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <section>
        <div>
          <h1>{name}</h1>
        </div>
        <motion.div animate={{ scale: 1.2, x: 200 }}>
          <Image width={500} height={500} src={`/images/test2.png`} alt="" />
        </motion.div>
      </section>
    </div>
  );
}
