import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import AboutMain from "../components/about/AboutMain";
import ContactMain from "../components/contact/ContactMain";
import CardTilt from "../components/elements/CardTilt";
import FooterMain from "../components/footer/FooterMain";
import HeroMain from "../components/hero/HeroMain";
import LayoutMain from "../components/layout/LayoutMain";
import ProjectDetail from "../components/projects/ProjectDetail";
import ProjectType from "../components/projects/ProjectType";
import ProjectsMain from "../components/projects/ProjectsMain";
import StackMain from "../components/stacks/StacksMain";
import TestCard from "../components/test/TestCard";
import TestLayoutShared from "../components/test/TestSharedLayout";
import Testpop from "../components/test/Testpop";
import WorkMain from "../components/work/WorkMain";
export default function Home() {
  const [project, setProject] = useState<ProjectType | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const onSelectProject = (proj: ProjectType) => {
    setOpen(true);
    setProject(proj);
  };

  return (
    <div id="home" className="w-screen w-fill ">
      <LayoutMain>
        <Head>
          <title>Adimar Alimuddin</title>
          <meta name="description" content="Adimar Alimuddin's Portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/adimar.png" />
        </Head>
        {/* <TestLayoutShared /> */}
        {/* <Testpop /> */}
        {/* <TestCard /> */}

        {/* <CardTilt></CardTilt> */}
        <HeroMain />
        {/* <WorkMain /> */}
        <ProjectsMain onSelect={onSelectProject} />
        <StackMain />

        <AboutMain />
        <ContactMain />
        <FooterMain />
        {open && (
          <ProjectDetail open={open} setOpen={setOpen} project={project} />
        )}
      </LayoutMain>
    </div>
  );
}
