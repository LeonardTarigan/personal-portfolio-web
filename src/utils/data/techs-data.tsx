import CSSIcon from "@/components/icons/css-icon";
import DartIcon from "@/components/icons/dart-icon";
import FirebaseIcon from "@/components/icons/firebase-icon";
import FlutterIcon from "@/components/icons/flutter-icon";
import HTMLIcon from "@/components/icons/html-icon";
import JSIcon from "@/components/icons/js-icon";
import NextJSIcon from "@/components/icons/nextjs-icon";
import ReactIcon from "@/components/icons/react-icon";
import ReduxIcon from "@/components/icons/redux-icon";
import SASSIcon from "@/components/icons/sass-icon";
import TailwindIcon from "@/components/icons/tailwind-icon";
import TSIcon from "@/components/icons/ts-icon";
import { ReactNode } from "react";

type TechProps = {
  logo: ReactNode;
  name: string;
};

const logoClassName = "w-7 h-7 group-hover:fill-black fill-white";

export const techs: TechProps[] = [
  {
    logo: <HTMLIcon className={logoClassName} />,
    name: "HTML",
  },
  {
    logo: <CSSIcon className={logoClassName} />,
    name: "CSS",
  },
  {
    logo: <JSIcon className={logoClassName} />,
    name: "JavaScript",
  },
  {
    logo: <TSIcon className={logoClassName} />,
    name: "TypeScript",
  },
  {
    logo: <DartIcon className={logoClassName} />,
    name: "Dart",
  },
  {
    logo: <ReactIcon className={logoClassName} />,
    name: "React.js",
  },
  {
    logo: <NextJSIcon className={logoClassName} />,
    name: "Next.js",
  },
  {
    logo: <FlutterIcon className={logoClassName} />,
    name: "Flutter",
  },
  {
    logo: <ReduxIcon className={logoClassName} />,
    name: "Redux",
  },
  {
    logo: <TailwindIcon className={logoClassName} />,
    name: "Tailwind CSS",
  },
  {
    logo: <SASSIcon className={logoClassName} />,
    name: "SASS",
  },
  {
    logo: <FirebaseIcon className={logoClassName} />,
    name: "Firebase",
  },
];
