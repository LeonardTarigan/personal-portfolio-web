import { fadeRightVariant, scaleToNormalVariant } from "@/utils/animation";
import { techs } from "@/utils/data/techs-data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function Techs() {
  const extendedRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: scrollProgress } = useScroll({
    target: extendedRef,
    offset: ["start end", "end end"],
  });

  const springScroll = useSpring(scrollProgress, { bounce: 0.5, damping: 12 });

  const xFlowLeft = useTransform(springScroll, [0.4, 1], ["0", "-100%"]);
  const xFlowRight = useTransform(springScroll, [0.4, 1], ["0", "100%"]);

  return (
    <section className="relative my-20 mt-32 flex h-fit justify-center overflow-hidden">
      <div ref={extendedRef} className="absolute -z-30 h-[70vh]"></div>
      <motion.div
        style={{ x: xFlowLeft }}
        className="absolute left-0 z-10 h-full w-1/2 bg-zinc-800"
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          margin: "0px 0px -30% 0px",
          once: true,
        }}
        transition={{
          duration: 0.5,
          staggerChildren: 0.1,
          type: "tween",
        }}
        className=" grid w-full grid-cols-3 rounded-xl px-5 md:h-52 md:w-2/3 md:grid-cols-6"
      >
        {techs.map(({ logo, name }, index) => {
          return (
            <div
              key={index}
              className="group relative flex w-full items-center justify-center overflow-hidden border border-zinc-700 p-5 transition-all duration-150 hover:bg-white"
            >
              <motion.div variants={scaleToNormalVariant}>{logo}</motion.div>
              <span className="absolute -bottom-[100%] w-full bg-zinc-800 px-2 py-1 text-center text-xs transition-all duration-150 group-hover:bottom-0">
                {name}
              </span>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: xFlowRight }}
        className="absolute right-0 z-10 h-full w-1/2 bg-zinc-800"
      ></motion.div>
    </section>
  );
}

export default Techs;
