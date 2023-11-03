import { fadeRightVariant } from "@/utils/animation";
import { experiences } from "@/utils/data/experience-data";
import { marqueeFont } from "@/utils/font";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Experiences() {
  return (
    <section id="experiences" className="relative flex flex-col gap-10">
      <Marquee
        autoFill
        gradient
        gradientColor="#000000"
        gradientWidth={100}
        direction="right"
        speed={100}
        className={`${marqueeFont.className} -z-20 flex select-none text-[12rem] font-black uppercase text-zinc-900 md:text-[20rem]`}
      >
        EXP.
      </Marquee>

      <div className="flex flex-col gap-5 px-5 md:px-10">
        {experiences.map(
          (
            {
              company,
              descriptions,
              imageUrl,
              location,
              timeline,
              title,
              type,
            },
            index,
          ) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  margin: "0px 0px -30% 0px",
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  staggerChildren: 0.2,
                  type: "tween",
                }}
                key={index}
                className="flex gap-2"
              >
                <motion.div
                  variants={fadeRightVariant}
                  className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-zinc-900"
                >
                  <Image src={imageUrl} alt={company} fill />
                </motion.div>
                <motion.div
                  variants={fadeRightVariant}
                  className="rounded-xl bg-zinc-900 p-5 md:w-1/2"
                >
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p className="font-semibold">{company}</p>
                  <p className="font-semibold text-zinc-500">
                    {timeline} • {location} • {type}
                  </p>
                  <ul className="ml-4 mt-3 list-disc text-sm">
                    {descriptions.map((desc, index) => {
                      return <li key={index}>{desc}</li>;
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            );
          },
        )}
      </div>
    </section>
  );
}

export default Experiences;
