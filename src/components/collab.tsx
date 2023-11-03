import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FormEvent, useRef } from "react";
import { fadeRightVariant } from "../../utils/animation";
import toast from "react-hot-toast";

function Collab() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY,
      ),
      {
        loading: "Sending message...",
        success: "Message sent succesfully",
        error: "An error occured! Message not sent :(",
      },
    );
  };

  return (
    <motion.section
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
      id="collab"
      className="flex justify-center gap-5 px-5 pb-20 md:px-10"
    >
      <motion.div
        variants={fadeRightVariant}
        className="rounded-xl bg-zinc-900 p-5 md:w-1/2"
      >
        <h1 className="text-3xl font-bold">Let&apos;s Collab, Shall We?</h1>
        <p className="mt-2 text-justify text-zinc-500">
          If you are interested in collaborating with me, I would love to hear
          from you. I am always open to new ideas and opportunities to work on
          exciting and meaningful projects.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="sender_name"
              placeholder="Your Name"
              className="w-full rounded-md bg-zinc-800 p-2 text-white placeholder:font-medium placeholder:text-zinc-500"
            />
            <input
              type="email"
              name="sender_email"
              placeholder="your@mail.com"
              className="w-full rounded-md bg-zinc-800 p-2 text-white placeholder:font-medium placeholder:text-zinc-500"
            />
            <textarea
              name="message"
              placeholder="Your Message ..."
              className="w-full rounded-md bg-zinc-800 p-2 text-white placeholder:font-medium placeholder:text-zinc-500"
            />
          </div>
          <button className="mt-10 w-full rounded-md border-2 border-white bg-white px-5 py-2 font-bold text-black transition-all duration-150 hover:bg-transparent hover:text-white active:translate-y-2">
            Send Email
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Collab;
