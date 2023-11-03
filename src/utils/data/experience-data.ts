type ExperienceProps = {
  title: string;
  company: string;
  timeline: string;
  location: string;
  type: "Hybrid" | "Remote" | "On-site";
  imageUrl: string;
  descriptions: string[];
};

export const experiences: ExperienceProps[] = [
  {
    title: "Web & Cloud Mentor",
    company: "GDSC University of Brawijaya",
    timeline: "Oct 2023 - Present",
    location: "Malang, East Java, Indonesia",
    type: "Hybrid",
    imageUrl:
      "https://media.licdn.com/dms/image/D560BAQE85PclffxFYQ/company-logo_100_100/0/1695734697500?e=1706140800&v=beta&t=73zfb5KUUhBcbcy_G-l00ULApKsR9vc1yYwgHnzVeX0",
    descriptions: [],
  },
  {
    title: "Frontend Web Developer",
    company: "TEDxUniversitasBrawijaya",
    timeline: "Jul 2023 - Present",
    location: "Malang, East Java, Indonesia",
    type: "Hybrid",
    imageUrl:
      "https://media.licdn.com/dms/image/C510BAQHBQk4A0EMfGg/company-logo_100_100/0/1525609952824/tedxuniversitasbrawijaya_logo?e=1706140800&v=beta&t=QwBzJrdBrZPLFAEd0B1bIvq2-KYFmpiV05xnBe-K8WY",
    descriptions: [
      "Collaborating with backend and UI/UX team to develop TEDxUniversitasBrawijaya 2023 web frontend using Next.js and Tailwind CSS",
      "Actively participating in team meetings and discussions",
    ],
  },
  {
    title: "Frontend Product Engineer",
    company: "Bersinar ",
    timeline: "Jun 2023 - Present",
    location: "Indonesia",
    type: "Remote",
    imageUrl:
      "https://media.licdn.com/dms/image/C560BAQFvOHw5vEv_EA/company-logo_100_100/0/1640537285928/bersinar_logo?e=1706140800&v=beta&t=6wUyr_jOriPmgP_ym8U87sPd3YJM_7qnQANdUfCLo0Q",
    descriptions: [
      "Developing Bersinar's new web application using Next.js",
      "Translating Figma design mockups into interactive and responsive UI components using Tailwind CSS",
      "Actively participating in weekly catch-up meeting",
    ],
  },
  {
    title: "Member of Frontend Division",
    company: "POROS Organization of Open Source ",
    timeline: "May 2023 - Present",
    location: "Malang, East Java, Indonesia ",
    type: "Hybrid",
    imageUrl:
      "https://media.licdn.com/dms/image/C560BAQFCMWH0qb9-MQ/company-logo_100_100/0/1649562394171/porosfilkomub_logo?e=1706745600&v=beta&t=U-0jj_GUyoupkGIWN3Qgw_-ASkNmSLMXIYOL-93I-Qc",
    descriptions: [
      "Developing POROS new website using Next.js and Tailwind CSS",
      "Actively participating in study group sessions",
      "Selected as head of event division for COSMOS 2023 (POROS annual event)",
    ],
  },
  {
    title: "Object-Oriented Programming Laboratory Assistant",
    company: "Faculty of Computer Science, University of Brawijaya",
    timeline: "Feb 2023 - Jun 2023",
    location: "Malang, East Java, Indonesia",
    type: "On-site",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E0BAQG-FO7nOawetA/company-logo_100_100/0/1519868042491?e=1706140800&v=beta&t=korFU_4H6sE095fAlLV-LNiJO1Yxt-jaxYYn-FY9E3Q",
    descriptions: [
      "Collaborated with my partner on mentoring 35 students about OOP paradigm using Java",
      "Reviewed student’s assignment submissions",
    ],
  },
  {
    title: "Basic Programming Laboratory Assistant",
    company: "Faculty of Computer Science, University of Brawijaya",
    timeline: "Sep 2022 - Dec 2022",
    location: "Malang, East Java, Indonesia",
    type: "On-site",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E0BAQG-FO7nOawetA/company-logo_100_100/0/1519868042491?e=1706140800&v=beta&t=korFU_4H6sE095fAlLV-LNiJO1Yxt-jaxYYn-FY9E3Q",
    descriptions: [
      "Collaborated with my partner on mentoring 30 students about programming basics with Java",
      "Designed live coding problems and case study projects",
      "Reviewed student’s live coding code submissions",
    ],
  },
];
