"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { fadeRightVariant } from "../../utils/animation";
import { projects } from "../../utils/data/project-data";
import { CodeIcon } from "./icons/code-icon";
import { LinkIcon } from "./icons/link-icon";
import { marqueeFont } from "../../utils/font";
import Image from "next/image";

function Projects() {
  const [maxItem, setMaxItem] = useState(3);

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center gap-10"
    >
      <Marquee
        autoFill
        gradient
        gradientColor="#000000"
        gradientWidth={100}
        direction="right"
        speed={100}
        className={`${marqueeFont.className} -z-20 flex select-none text-[12rem] font-black uppercase text-zinc-900 md:text-[15rem]`}
      >
        PROJECTS.
      </Marquee>
      <div className="flex flex-col gap-32 px-5 pb-10 md:px-10">
        {projects.map(
          (
            { description, name, techs, type, projectUrl, repoUrl, imageFile },
            index,
          ) => {
            return (
              index + 1 <= maxItem && (
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
                  key={index}
                  className={`${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex flex-col gap-10`}
                >
                  <motion.div variants={fadeRightVariant} className="basis-2/5">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-800">
                      <Image
                        src={`/projects/${imageFile}`}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                  <div className="flex basis-3/5 flex-col justify-between gap-10">
                    <div className="flex flex-col gap-5">
                      <motion.h1
                        variants={fadeRightVariant}
                        className="text-xl font-bold"
                      >
                        {name}
                      </motion.h1>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((item, index) => {
                          return (
                            <motion.div
                              key={index}
                              variants={fadeRightVariant}
                              className="rounded-full bg-zinc-800 px-5 py-1 text-xs font-semibold"
                            >
                              {item}
                            </motion.div>
                          );
                        })}
                      </div>
                      <motion.p
                        className="text-justify"
                        variants={fadeRightVariant}
                      >
                        {description}
                      </motion.p>
                    </div>
                    <div className="flex flex-col gap-4 font-bold md:flex-row md:gap-2">
                      <motion.div
                        className="w-full"
                        variants={fadeRightVariant}
                      >
                        <button
                          disabled={projectUrl === undefined}
                          className="w-full rounded-lg border-2 border-white bg-white px-5 py-2 text-black transition-all duration-150 hover:bg-transparent hover:text-white active:translate-y-2 disabled:cursor-not-allowed disabled:border-zinc-800 disabled:bg-zinc-900 disabled:text-zinc-700"
                        >
                          <a
                            target="_blank"
                            href={projectUrl}
                            className="flex w-full items-center justify-center gap-2"
                          >
                            <LinkIcon className="h-5 w-5" />
                            <span>Visit</span>
                          </a>
                        </button>
                      </motion.div>
                      <motion.div
                        className="w-full"
                        variants={fadeRightVariant}
                      >
                        <button
                          disabled={repoUrl === undefined}
                          className="w-full rounded-lg border-2 border-zinc-800 bg-zinc-800 px-5 py-2 transition-all duration-150 hover:bg-transparent hover:text-zinc-500 active:translate-y-2 disabled:cursor-not-allowed disabled:bg-zinc-900 disabled:text-zinc-700"
                        >
                          <a
                            target="_blank"
                            href={repoUrl}
                            className="flex w-full items-center justify-center gap-2 "
                          >
                            <CodeIcon className="h-5 w-5" />
                            <span>Source Code</span>
                          </a>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            );
          },
        )}
      </div>
      {maxItem < projects.length && (
        <button
          onClick={() => setMaxItem((prev) => prev + 2)}
          className="group flex w-fit items-center justify-center gap-2 rounded-lg border-2 border-zinc-800 bg-zinc-800 px-10 py-2 transition-all duration-150 hover:bg-transparent hover:text-zinc-500 active:translate-y-2"
        >
          <span>See More</span>
        </button>
      )}
    </section>
  );
}

export default Projects;
