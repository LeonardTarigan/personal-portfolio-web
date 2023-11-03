import { MotionProps, Variants } from "framer-motion";

export const fadeRightVariant: Variants = {
  visible: { x: "0px", opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "-10px", opacity: 0, transition: { duration: 0.5 } },
};

export const fadeRightAnimationProps: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: false,
    margin: "0px 0px -27% 0px",
  },
  variants: fadeRightVariant,
};
