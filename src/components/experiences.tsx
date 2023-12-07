import { db } from "@/firebase";
import { fadeRightVariant } from "@/utils/animation";
import { marqueeFont } from "@/utils/font";
import { convertTimestampToMonthYear } from "@/utils/global-functions";
import { ExperienceData } from "@/utils/types";
import { FirebaseError } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";

function Experiences() {
  const [exp, setExp] = useState<ExperienceData[]>();

  async function getAllExperience(): Promise<void> {
    try {
      const docRef = doc(db, "content-data", "experience");
      const docSnap = await getDoc(docRef);
      const data = docSnap.data()?.data;

      if (docSnap.exists()) {
        setExp(data);
      }
    } catch (err) {
      if (err instanceof FirebaseError) toast.error(err.message);
    }
  }

  useEffect(() => {
    getAllExperience();
  }, []);

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
        {!exp && (
          <>
            {[...Array(3)].map((_, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <div className="h-14 w-14 shrink-0 animate-pulse overflow-hidden rounded-lg bg-zinc-900"></div>
                  <div className="aspect-video animate-pulse rounded-xl bg-zinc-900 p-5 md:w-1/2"></div>
                </div>
              );
            })}
          </>
        )}
        {exp?.map(
          (
            {
              company,
              descriptions,
              imageURL,
              startTime,
              endTime,
              location,
              title,
            },
            index,
          ) => {
            const timeline = `${convertTimestampToMonthYear(
              startTime.seconds,
            )} - ${
              endTime ? convertTimestampToMonthYear(endTime.seconds) : "Present"
            }`;

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
                  <Image src={imageURL} alt={company} fill />
                </motion.div>
                <motion.div
                  variants={fadeRightVariant}
                  className="rounded-xl bg-zinc-900 p-5 md:w-1/2"
                >
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p className="font-semibold">{company}</p>
                  <p className="font-semibold text-zinc-500">
                    {timeline} • {location}
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
