type ProjectProps = {
  name: string;
  type: "real" | "dummy";
  techs: string[];
  imageFile: string;
  projectUrl?: string;
  repoUrl?: string;
  description: string;
};

export const projects: ProjectProps[] = [
  {
    name: "TEDxUniversitasBrawijaya",
    type: "real",
    techs: ["TypeScript", "Next.js", "TailwindCSS", "Framer Motion"],
    imageFile: "tedx.png",
    projectUrl: "https://tedxuniversitasbrawijaya.org/",
    description:
      "This was the most challenging project I have ever made so far. It was a website for a TEDx event that aimed to inspire people with ideas worth spreading. I learned a lot about how to use Framer Motion to create smooth transitions, interactive elements, and dynamic animations. Additionally, I also gained insights into how to work collaboratively with the UI/UX and backend team. It was a rewarding experience that taught me valuable skills and knowledge.",
  },
  {
    name: "Faceless",
    type: "dummy",
    techs: ["TypeScript", "Next.js", "TailwindCSS", "Firebase"],
    imageFile: "faceless.png",
    projectUrl: "https://faceless-message.vercel.app/",
    repoUrl: "https://github.com/LeonardTarigan/faceless",
    description:
      "Faceless was a take-home project for my application as a frontend product engineer at Bersinar. It is an anonymous messaging application that allowed users to send and receive messages without revealing their identities. I learned how to use Firebase Authentication and Realtime Database for the first time in this project. It was a fun and challenging project that taught me a lot about the implementation of Firebase",
  },
  {
    name: "Sky",
    type: "dummy",
    techs: ["PWA", "TypeScript", "Next.js", "TailwindCSS", "Redux"],
    imageFile: "sky.png",
    projectUrl: "https://sky-weather.vercel.app/",
    repoUrl: "https://github.com/LeonardTarigan/sky",
    description:
      "Sky was a project that I made for the freepass selection for POROS Frontend division. It is a weather app that used Openweathermap API. Sky is not only marked my first experience with TypeScript and Redux but also stands as the initial project where I explored and implemented PWA (Progressive Web App) that allows it to behave like a native mobile app.",
  },
  {
    name: "Guess It",
    type: "dummy",
    techs: ["TypeScript", "React.js", "TailwindCSS", "Zustand"],
    imageFile: "guess-it.png",
    projectUrl: "https://whatnumber.vercel.app/",
    repoUrl: "https://github.com/LeonardTarigan/guess-it",
    description:
      "Guess-It is a project that I made to learn Zustand, a state management library for React. It was also the first game that I developed using React. It is a number guessing game that challenged the user to guess a random number within a certain interval, based on the difficulty level.",
  },
  {
    name: "AniZone",
    type: "dummy",
    techs: ["JavaScript", "React.js", "TailwindCSS", "Context API"],
    imageFile: "anizone.png",
    projectUrl: "https://anizone.netlify.app/",
    repoUrl: "https://github.com/LeonardTarigan/anizone",
    description:
      "Anizone is my second React project. It is an anime website that allowed users to search and filter anime by various criteria, such as genre and status. I used Jikan API, a service that provides data from MyAnimeList. I learned how to use Jikan API to fetch and display anime information, such as title, synopsis, image, score, etc. It was a fun and interesting project to explore my interest in anime and web development.",
  },
  {
    name: "Seekr",
    type: "dummy",
    techs: ["JavaScript", "React.js", "TailwindCSS", "Context API"],
    imageFile: "seekr.png",
    projectUrl: "https://seekrco.netlify.app/",
    repoUrl:
      "https://gitlab.com/leonardtarigan/sanbercode-reactjs-batch-36/-/tree/main/final-project",
    description:
      "Seekr is my first React project. It is a job portal app that allowed users to create, read, update, and delete job listings, as well as to sign up, log in, change password, and log out of their account. This is my first experience on using Tailwind CSS, Context API, and implementing CRUD, authentication, and authorization. It was a challenging yet rewarding project that helped me learn the basics of React.",
  },
];
