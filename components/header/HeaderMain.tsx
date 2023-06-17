import { AnimatePresence, calcLength, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
let x = 0;

export default function HeaderMain() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [toped, setToped] = useState(true);
  const onScroll = () => {
    const top = document.body.getBoundingClientRect().top;

    if (top > x) {
      console.log("yes");
      setShow(true);
    } else {
      setShow(false);
    }
    x = top;

    if (x == 0 || x > 0) {
      setToped(true);
    } else {
      setToped(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "transition-all fixed w-full px-4  duration-300 bg-white  z-[15] " +
        (open ? "  top-0 z-10 " : " flex") +
        (show ? " fixed top-0 shadow-lg py-3  " : " top-[-70px] py-4 ") +
        (toped && "  shadow-none py-4")
      }
    >
      <div className="flex flex-wrap w-full max-w-5xl mx-auto px-3 justify-between z-10 ">
        <Logo />
        <nav className="md:flex hidden items-center justify-between gap-4 flex-wrap">
          <Menu text="Works" />
          <Menu text="Skills" />
          <Menu text="About" />
          <Menu text="Contact" />
        </nav>
        <MobileMenu open={open} setOpen={setOpen} show={show} />
      </div>
    </div>
  );
}

function MobileMenu({
  open,
  setOpen,
  show,
}: {
  open: boolean;
  setOpen: any;
  show: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onToggle = () => {
    setOpen((p: boolean) => !p);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="block md:hidden "
    >
      <button
        onClick={onToggle}
        className="text-xl font-extrabold flex items-center justify-center min-w-[50px] z-[200] "
      >
        <div
          className={
            "transition-all origin-center " + (open && "rotate-45 -mr-1")
          }
        >
          |
        </div>
        <div className={"transition-all " + (open && " mt-1 dopacity-0")}>
          |
        </div>
        <div
          className={
            "transition-all origin-center  " + (open && "-rotate-45 -ml-1")
          }
        >
          |
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              // opacity: 0,
              height: "0%",
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            animate={{
              // opacity: 1,
              height: "100%",
              borderBottomLeftRadius: "20%",
              borderBottomRightRadius: "20%",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{
              height: "0%",
              // opacity: 0,
              borderBottomLeftRadius: "100%",
              borderBottomRightRadius: "100%",
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            ref={ref}
            className={
              "transition-[max-height] mobile-menu-container fixed w-screen top-0 z-[-1] left-0  bg-white shadow-xl h-full  flex flex-col justify-center overflow-hidden p-3 " +
              (show ? " max-h-[400px] " : " max-h-[200px]")
            }
          >
            <nav
              onClick={onToggle}
              className="p-3 py-6 flex flex-col gap-3 items-center justify-around ring-1d h-full max-h-[300px] "
            >
              <Menu text="Works" />
              <Menu text="Skills" />
              <Menu text="About" />
              <Menu text="Contact" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Menu({ text }: { text: string }) {
  return (
    <li className=" list-none text-lg font-semibold">
      <a href={`#${text.toLowerCase()}`}>{text}</a>
    </li>
  );
}
