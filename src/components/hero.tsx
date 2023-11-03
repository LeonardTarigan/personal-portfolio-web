/* eslint-disable react-hooks/exhaustive-deps */

import { useGlitchText } from "@/hooks/useGlitchText";
import { Orbitron } from "next/font/google";
import { Link as Scroll } from "react-scroll";
import PSCircle from "./icons/ps-circle";
import PSRectangle from "./icons/ps-rectangle";
import PSTriangle from "./icons/ps-triangle";
import PSX from "./icons/ps-x";
import Logo from "./logo";

const glitchFont = Orbitron({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Hero() {
  const text = useGlitchText("LEONARD_TARIGAN");

  return (
    <section className="flex h-screen w-full flex-col justify-between gap-10 p-5 pb-10 md:max-h-[45rem] md:p-10">
      <div
        id="glitch-text"
        className="group flex cursor-default flex-col items-center justify-between gap-5 border border-zinc-400 px-7 py-7 font-bold transition-all duration-150 hover:bg-white hover:text-black sm:flex-row"
      >
        <h1
          className={`${glitchFont.className} select-none text-2xl sm:text-3xl md:text-4xl lg:text-7xl`}
        >
          {text}
        </h1>
        <Logo className="h-14 w-14 fill-white group-hover:fill-black" />
      </div>
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
        <p className="w-3/4 text-center sm:w-2/3 md:text-justify lg:w-2/5">
          Passionate frontend developer with a love for exploring cutting-edge
          technologies. Crafting seamless digital experiences is my forte.
          Let&apos;s bring your ideas to life with innovation and precision in
          every line of code.
        </p>
        <ul className="flex w-full select-none flex-col items-center gap-3 text-end font-semibold uppercase text-zinc-500 md:items-end">
          <li>
            <Scroll
              to="profile"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="group relative flex cursor-pointer items-center justify-end gap-2 text-emerald-500 transition-all duration-150"
            >
              <span className="absolute opacity-0 transition-all duration-150 group-hover:-translate-x-12 group-hover:opacity-100">
                Profile
              </span>
              <span className="rounded-full p-1 transition-all duration-150 group-active:translate-y-2">
                <PSTriangle className="h-7 w-7 stroke-white group-hover:stroke-emerald-500" />
              </span>
            </Scroll>
          </li>
          <li>
            <Scroll
              to="experiences"
              spy={true}
              smooth={true}
              offset={30}
              duration={1000}
              className="group relative flex cursor-pointer items-center justify-end gap-2 text-rose-500 transition-all duration-150"
            >
              <span className="absolute opacity-0 transition-all duration-150 group-hover:-translate-x-12 group-hover:opacity-100">
                Experiences
              </span>
              <span className="rounded-full p-1 transition-all duration-150 group-active:translate-y-2">
                <PSCircle className="h-7 w-7 stroke-white group-hover:stroke-rose-500" />
              </span>
            </Scroll>
          </li>
          <li>
            <Scroll
              to="projects"
              spy={true}
              smooth={true}
              offset={30}
              duration={1000}
              className="group relative flex cursor-pointer items-center justify-end gap-2 text-sky-500 transition-all duration-150"
            >
              <span className="absolute opacity-0 transition-all duration-150 group-hover:-translate-x-12 group-hover:opacity-100">
                Projects
              </span>
              <span className="rounded-full p-1 transition-all duration-150 group-active:translate-y-2">
                <PSX className="h-7 w-7 stroke-white group-hover:stroke-sky-500" />
              </span>
            </Scroll>
          </li>
          <li>
            <Scroll
              to="collab"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="group relative flex cursor-pointer items-center justify-end gap-2 text-pink-500 transition-all duration-150"
            >
              <span className="absolute opacity-0 transition-all duration-150 group-hover:-translate-x-12 group-hover:opacity-100">
                Collab
              </span>
              <span className="rounded-full p-1 transition-all duration-150 group-active:translate-y-2">
                <PSRectangle className="h-7 w-7 stroke-white group-hover:stroke-pink-500" />
              </span>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
