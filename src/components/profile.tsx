"use client";

import { AnimatePresence, motion } from "framer-motion";
import { fadeRightVariant } from "../../utils/animation";
import Image from "next/image";
import { socialMedias } from "../../utils/data/social-media-data";
import { useEffect, useState } from "react";

function Profile() {
  const [imageNumber, setImageNumber] = useState(1);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageNumber((prevNumber) => (prevNumber === 1 ? 2 : 1));
    }, 2000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      id="profile"
      className="flex w-full flex-col gap-10 px-5 md:flex-row md:px-10"
    >
      <div className="relative h-fit basis-2/5 rounded-xl p-5">
        <div className="relative aspect-square w-full select-none overflow-hidden border bg-zinc-900">
          <AnimatePresence>
            {imageNumber === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                className="absolute h-full w-full"
              >
                <Image
                  src={`/profile-pic-1.png`}
                  alt="Pic"
                  fill
                  className="scale-110 object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {imageNumber === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                className="absolute h-full w-full"
              >
                <Image
                  src={`/profile-pic-2.png`}
                  alt="Pic"
                  fill
                  className="scale-110 object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-white"></div>
        <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-white"></div>
      </div>
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
        className="mt-4 flex basis-3/5 flex-col gap-4"
      >
        <div>
          <motion.h1
            variants={fadeRightVariant}
            className="text-3xl font-bold uppercase md:text-4xl"
          >
            Leonard Tarigan
          </motion.h1>
          <motion.p
            variants={fadeRightVariant}
            className="font-semibold text-zinc-500"
          >
            Frontend Developer | Web & Cloud Mentor at GDSC University of
            Brawijaya | Informatics Student
          </motion.p>
        </div>
        <motion.hr variants={fadeRightVariant} className="border-zinc-500" />

        <div className="flex gap-2">
          {socialMedias.map(({ icon, link }, index) => {
            return (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                variants={fadeRightVariant}
                whileTap={{ y: 4 }}
                className="group flex cursor-pointer items-center justify-center rounded-full border-2 border-white p-3 transition-colors duration-150 hover:bg-white"
              >
                {icon}
              </motion.a>
            );
          })}
        </div>
        <motion.p
          variants={fadeRightVariant}
          className="text-justify text-sm md:text-base"
        >
          In my third year at the University of Brawijaya, I&apos;m immersing
          myself in the dynamic world of informatics. As a passionate Frontend
          Developer, I specialize in Next.js, TypeScript, and Tailwind,
          sculpting user interfaces that seamlessly blend innovation with
          usability. Beyond coding, my curiosity extends to mobile development
          and machine learning, where I find joy in unraveling the possibilities
          of tomorrow&apos;s tech landscape.
        </motion.p>
        <motion.p
          variants={fadeRightVariant}
          className="text-justify text-sm md:text-base"
        >
          When not crafting digital experiences, I switch gears to my other
          passions. With a guitar in hand, I find solace in creating melodies,
          particularly drawn to the intricate rhythms of prog metal. Music fuels
          my creativity, offering a harmonious balance to the analytical world
          of coding. Together, these facets define a journey where technology
          meets artistry, and each chord strummed resonates with the same
          passion that fuels my coding endeavors.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Profile;
