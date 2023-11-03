"use client";

import Collab from "@/components/collab";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import { ArrowUpIcon } from "@/components/icons/arrow-up-icon";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Techs from "@/components/techs";
import { useConditionalByScroll } from "@/hooks/useConditionalByScroll";
import { animateScroll as scroll } from "react-scroll";

export default function Home() {
  const showButton = useConditionalByScroll();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <Profile />
      <Experiences />
      <Projects />
      <Techs />
      <Collab />

      <button
        onClick={scrollToTop}
        className={`${
          showButton ? "bottom-5" : "-bottom-full"
        } group fixed right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-zinc-800 bg-opacity-30 backdrop-blur-md transition-all duration-150 hover:bg-white`}
      >
        <ArrowUpIcon className="h-8 w-8 group-hover:text-black" />
      </button>
    </main>
  );
}
