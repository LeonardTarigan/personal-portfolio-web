import { Timestamp } from "firebase/firestore";

export type ExperienceData = {
  title: string;
  company: string;
  location: string;
  imageURL: string;
  startTime: Timestamp;
  endTime?: Timestamp;
  descriptions: string[];
};
