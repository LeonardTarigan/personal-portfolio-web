import { ReactNode } from "react";
import InstagramIcon from "@/components/icons/instagram-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import GithubIcon from "@/components/icons/github-icon";

type SocialMediaProps = {
  icon: ReactNode;
  link: string;
};

export const socialMedias: SocialMediaProps[] = [
  {
    icon: (
      <GithubIcon className="h-7 w-7 fill-white group-hover:fill-black group-hover:text-black" />
    ),
    link: "https://github.com/LeonardTarigan",
  },
  {
    icon: (
      <LinkedinIcon className="h-7 w-7 fill-white group-hover:fill-black " />
    ),
    link: "https://www.linkedin.com/in/leonardtarigan/",
  },
  {
    icon: <XIcon className="h-7 w-7 fill-white group-hover:fill-black " />,
    link: "https://twitter.com/asyncfnc",
  },
  {
    icon: (
      <InstagramIcon className="h-7 w-7 fill-white group-hover:fill-black " />
    ),
    link: "https://www.instagram.com/leonardtarigannn/",
  },
];
